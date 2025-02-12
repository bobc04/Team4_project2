const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api"; //  Fixed variable name

async function handleResponse(response: Response) {
  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch (err) {
      throw new Error("Server error, please try again.");
    }
    throw new Error(errorData?.message || "Something went wrong");
  }
  return response.json();
}

export async function registerUser(userData: { name: string; phone: string; email: string; password: string }) {
  try {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
}

export async function loginUser(credentials: { email: string; password: string }) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function fetchJobs() {
  try {
    const response = await fetch(`${API_URL}/jobs`);
    return handleResponse(response);
  } catch (error) {
    console.error("Fetch jobs error:", error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${API_URL}/search/categories`);
    return handleResponse(response);
  } catch (error) {
    console.error("Fetch categories error:", error);
    throw error;
  }
}

export async function fetchServices() {
  try {
    const response = await fetch(`${API_URL}/services`);
    return handleResponse(response);
  } catch (error) {
    console.error("Fetch services error:", error);
    throw error;
  }
}


