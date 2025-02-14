const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api";

interface ApiError {
  message: string;
}

interface UserData {
  name: string;
  phone: string;
  email: string;
  password: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorData: ApiError;
    try {
      errorData = await response.json();
    } catch (err) {
      throw new Error("Server error, please try again.");
    }
    throw new Error(errorData?.message || "Something went wrong");
  }
  return response.json();
}

export async function registerUser(userData: UserData) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Registration error:", error);
    if (error instanceof Error) {
      throw new Error(`Registration failed: ${error.message}`);
    }
    throw new Error("Registration failed: Network error");
  }
}

export const loginUser = async (credentials: LoginCredentials): Promise<{ token: string }> =>  {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Login error:", error);
    if (error instanceof Error) {
      throw new Error(`Login failed: ${error.message}`);
    }
    throw new Error("Login failed: Network error");
  }
}

export async function fetchJobs() {
  try {
    const response = await fetch(`${API_URL}/jobs`, {
      headers: {
        "Accept": "application/json"
      },
      credentials: "include"
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Fetch jobs error:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch jobs: ${error.message}`);
    }
    throw new Error("Failed to fetch jobs: Network error");
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${API_URL}/search/categories`, {
      headers: {
        "Accept": "application/json"
      },
      credentials: "include"
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Fetch categories error:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }
    throw new Error("Failed to fetch categories: Network error");
  }
}

export async function fetchServices() {
  try {
    const response = await fetch(`${API_URL}/services`, {
      headers: {
        "Accept": "application/json"
      },
      credentials: "include"
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Fetch services error:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to fetch services: ${error.message}`);
    }
    throw new Error("Failed to fetch services: Network error");
  }
}