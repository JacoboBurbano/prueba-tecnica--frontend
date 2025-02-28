import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import URL from "../url/api";
import axios from "axios";
import "./Main.css"; 

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("users");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    try {
      const response = await axios.get(`${URL}${searchType}/`, {
        params: { search: searchQuery }
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <button onClick={() => navigate("/register-user")} className="btn btn-primary">Insert User</button>
        <button onClick={() => navigate("/register-activity")} className="btn btn-primary">Insert Activity</button>
        <button onClick={() => navigate("/activities")} className="btn btn-secondary">Activities</button>
      </nav>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search users or activities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="search-select"
        >
          <option value="users">Users</option>
          <option value="activities">Activities</option>
        </select>
        <button onClick={handleSearch} className="btn btn-search">Search</button>
      </div>

      <div className="results">
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
              <li key={index} className="result-item">{JSON.stringify(item)}</li>
            ))}
          </ul>
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
