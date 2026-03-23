const url = "https://contactmanagerfrontend-rouge.vercel.app/User";

async function fetchUsers() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched users:", data);
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();