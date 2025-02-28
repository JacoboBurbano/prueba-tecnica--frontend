import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import URL from "../url/api";
import axios from "axios";
import "./RegisterActivity.css";

const RegisterActivity: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: "",
    action: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(`${URL}activities/`, formData);
      if (response.status === 201) {
        navigate("/"); // Redirige a la página principal
      }
    } catch (err) {
      setError("Failed to register activity. Please try again.");
    }
  };

  return (
    <div className="activity-container">
      <h2>Register Activity</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="activity-form">
        <input
          type="number"
          name="user_id"
          placeholder="User ID"
          value={formData.user_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="action"
          placeholder="Enter action"
          value={formData.action}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-submit">Register Activity</button>
      </form>
    </div>
  );
};

export default RegisterActivity;

