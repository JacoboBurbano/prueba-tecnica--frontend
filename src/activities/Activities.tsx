import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Activities.css";

const API_USERS = "http://localhost:8000/views/api/users/";
const API_ACTIVITIES = "http://localhost:8000/views/api/activities/";

const Activities: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; username: string }[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>("");
  const [activities, setActivities] = useState<{ action: string; timestamp: string }[]>([]);

  useEffect(() => {
    axios
        .get(API_USERS)
        .then((response) => {
            setUsers(response.data);
            })
        .catch((error) => {
            console.error("Error obteniendo usuarios:", error);
        });
  }, []);

  const handleSearch = () => {
    if (!selectedUser) return;

    axios
      .get(API_ACTIVITIES, { params: { user_id: selectedUser } })
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="activities-container">
      <h1>Actividades de Usuarios</h1>

      <div className="search-box">
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Seleccione un usuario</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>
        <button onClick={handleSearch}>Buscar Actividades</button>
      </div>

      <div className="activities-list">
        <h2>Resultados:</h2>
        {activities.length === 0 ? (
          <p>No hay actividades registradas.</p>
        ) : (
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>
                <strong>Acción:</strong> {activity.action} - <strong>Fecha:</strong> {activity.timestamp}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Activities;
