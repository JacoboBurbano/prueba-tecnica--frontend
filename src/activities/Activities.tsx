import React, { useEffect, useState } from "react";
import axios from "axios";
import URL from "../url/api";
import "./Activities.css";

const API_USERS = `${URL}users/`;
const API_ACTIVITIES = `${URL}activities/`;

const Activities: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; username: string }[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [activities, setActivities] = useState<{ action: string; timestamp: string }[]>([]);

  useEffect(() => {
    axios
        .get(API_USERS)
        .then((response) => {
            setUsers(response.data.results);
            })
        .catch((error) => {
            console.error("Error:", error);
        });
  }, []);

  const handleSearch = () => {
    if (!selectedUser) return;

    axios
      .get(API_ACTIVITIES, { params: { user_id: selectedUser } })
      .then((response) => {
        setActivities(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="activities-container">
      <h1>User activities</h1>

      <div className="search-box">
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Select an user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Search activities</button>
      </div>

      <div className="activities-list">
        <h2>Results:</h2>
        {activities.length === 0 ? (
          <p>No activities.</p>
        ) : (
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>
                <strong>Action:</strong> {activity.action} - <strong>Date:</strong> {activity.timestamp}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Activities;
