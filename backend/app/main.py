import os
from datetime import datetime, timezone

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from supabase import create_client

load_dotenv()

app = FastAPI(title="BFN")

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY") or os.getenv("SUPABASE_ANON_KEY")
supabase = create_client(supabase_url, supabase_key) if supabase_url and supabase_key else None


class LoginRequest(BaseModel):
    email: str
    password: str


class RegisterRequest(BaseModel):
    full_name: str
    username: str
    email: str
    password: str
    registration_code: str


def _require_supabase():
    if supabase is None:
        raise HTTPException(status_code=503, detail="Supabase is not configured.")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "message": "Bridge Finance Network API is running."}



@app.post("/auth/login")
def login(body: LoginRequest) -> dict:
    _require_supabase()
    try:
        auth_response = supabase.auth.sign_in_with_password(
            {"email": body.email, "password": body.password}
        )
    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))

    user = auth_response.user
    if user is None:
        raise HTTPException(status_code=401, detail="Login failed.")

    profile = (
        supabase.table("profiles")
        .select("role")
        .eq("id", user.id)
        .single()
        .execute()
    )

    if not profile.data:
        raise HTTPException(status_code=404, detail="Profile not found.")

    return {
        "message": "User logged in successfully.",
        "role": profile.data["role"],
        "redirect": "/portal/dashboard",
    }


@app.post("/auth/register")
def register(body: RegisterRequest) -> dict:
    _require_supabase()

    # Validate registration code (body passes registration_code as the name of the field)
    code_result = (
        supabase.table("registration_codes")
        .select("*")
        .eq("code", body.registration_code)
        .single()
        .execute()
    )

    if not code_result.data:
        raise HTTPException(status_code=400, detail="Invalid registration code.")

    code = code_result.data

    if code["used"]:
        raise HTTPException(status_code=400, detail="Registration code has already been used.")

    expires_at = datetime.fromisoformat(code["expires_at"].replace("Z", "+00:00"))
    if expires_at < datetime.now(timezone.utc):
        raise HTTPException(status_code=400, detail="Registration code has expired.")

    # Create auth user
    try:
        auth_response = supabase.auth.sign_up(
            {"email": body.email, "password": body.password}
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    user = auth_response.user
    if user is None:
        raise HTTPException(status_code=400, detail="Failed to create user.")

    # Insert profile
    supabase.table("profiles").insert(
        {
            "id": user.id,
            "full_name": body.full_name,
            "username": body.username,
            "email": body.email,
			# I am confused about how to get the school data
            "team": code["team"],
            "tier": code["starting_tier"],
            "role": "member",
            "joined_at": datetime.now(timezone.utc).isoformat(),
        }
    ).execute()

    # Mark code as used
    supabase.table("registration_codes").update({"used": True}).eq(
        "code", body.registration_code
    ).execute()

    return {"message": "Registration successful.", "redirect": "/portal/dashboard"}
