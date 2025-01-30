import React, { useEffect, useState } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";

const UserList = () => {
  const [users, setUsers] = useState([]); // State to hold the user list
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true); // Start loading
      setError(null); // Reset errors

      try {
        const functions = getFunctions(); // Initialize Firebase Functions
        const listAllUsers = httpsCallable(functions, "listAllUsers"); // Call your Cloud Function
        const response = await listAllUsers(); // Fetch users from Cloud Function

        setUsers(response.data.users); // Set the user data
      } catch (err) {
        setError(err.message); // Capture any errors
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false); // Stop loading
      }
    }

    fetchUsers(); // Call the function when the component mounts
  }, []);

  if (loading) return <p>Loading users...</p>; // Show loading indicator
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>; // Show error message

  return (
    <div>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.uid}>
              <strong>{user.email}</strong>{" "}
              <span>(Admin: {user.customClaims?.admin ? "Yes" : "No"})</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
