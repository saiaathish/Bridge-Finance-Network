import os

from dotenv import load_dotenv
from fastapi import FastAPI
from supabase import create_client
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="BFN")

origins = [
    "http://localhost:3000",  # Next.js local development server
    "https://bridgefinance.network",  # Production domain
]

# uvicorn main:app --reload --port 8000 (for local development)
# uvicorn main:app --host --port 8000 (for production deployment)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)


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
	
	
