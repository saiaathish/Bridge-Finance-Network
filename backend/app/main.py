import os

from dotenv import load_dotenv
from fastapi import FastAPI
from supabase import create_client

app = FastAPI(title="BFN")

load_dotenv()

supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY") or os.getenv("SUPABASE_ANON_KEY")
supabase = create_client(supabase_url, supabase_key) if supabase_url and supabase_key else None


@app.get("/health")
def health() -> dict[str, str]:
	return {"status": "ok", "message": "it works"}


# auth endpoints
@app.post("/auth/login")
def login(payload: dict) -> dict:
	email = payload.get("email")
	password = payload.get("password")

	if not email or not password:
		return {"error": "Email and password are required."}

	if supabase is None:
		return {"error": "Supabase is not configured."}
	
	try:
		response = supabase.auth.sign_in_with_password(
			{
				"email": email,
				"password": password,
			}
		)
		return {"message": "User logged in successfully.", "data": response}
	except Exception as e:
		return {"error": str(e)}




@app.post("/auth/register")
def register(payload: dict) -> dict:
	# get the email and password sign up from the request body
	email = payload.get("email")
	password = payload.get("password")

	if not email or not password:
		return {"error": "Email and password are required."}

	if supabase is None:
		return {"error": "Supabase is not configured."}
	
	# create a new user in supabase
	try:
		response = supabase.auth.sign_up(
			{
				"email": email,
				"password": password,
			}
		)
		return {"message": "User registered successfully.", "data": response}
	except Exception as e:
		return {"error": str(e)}
	
	
