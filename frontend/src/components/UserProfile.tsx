"use client";

import { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import { recipes } from "../data/recipe";
import "../styles/UserProfile.css";

export function UserProfile() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeTab === "all" || recipe.category === activeTab)
  );

  return (
    <div className="profile-container">
  <div className="profile-content">
    {/* Profile Sidebar */}
    <div className="profile-sidebar">
      <div className="user-info">
        <div className="avatar">
          <img src="..\src\assets\icons\male-user.png" alt="User" />
        </div>
        <h2 className="username">Jane Doe</h2>
        <p className="user-bio">Food enthusiast</p>

        <div className="sidebar-nav">
          <button className="sidebar-button">
            <span className="icon"><img src="..\src\assets\icons\sidebar_user.png" alt="Profile Icon" /></span>
            Profile
          </button>
          <button className="sidebar-button active">
            <span className="icon"><img src="../src/assets/icons/sidebar_heart.png" alt="Favorites Icon" /></span>
            Favorites
          </button>
          <button className="sidebar-button">
            <span className="icon"><img src="../src/assets/icons/sidebar_chef_hat.png" alt="Recipes Icon" /></span>
            My Recipes
          </button>
          <button className="sidebar-button">
            <span className="icon"><img src="../src/assets/icons/sidebar_cogwheel.png" alt="Settings Icon" /></span>
            Settings
          </button>
        </div>
      </div>
    </div>
  



        {/* Main Content */}
        <div className="main-content">
          <div className="content-header">
            <h1>My Favorite Recipes</h1>
            <div className="search-container">
              <span className="search-icon">
                <img className="icon" src="..\src\assets\icons\search-symbol.png" alt="povecalo" />
              </span>
              <input
                type="text"
                placeholder="Search favorites..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="tabs">
            <button
              className={`tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`tab ${activeTab === "breakfast" ? "active" : ""}`}
              onClick={() => setActiveTab("breakfast")}
            >
              Breakfast
            </button>
            <button
              className={`tab ${activeTab === "lunch" ? "active" : ""}`}
              onClick={() => setActiveTab("lunch")}
            >
              Lunch
            </button>
            <button
              className={`tab ${activeTab === "dinner" ? "active" : ""}`}
              onClick={() => setActiveTab("dinner")}
            >
              Dinner
            </button>
            <button
              className={`tab ${activeTab === "dessert" ? "active" : ""}`}
              onClick={() => setActiveTab("dessert")}
            >
              Dessert
            </button>
          </div>

          <div className="recipes-grid">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p className="no-recipes">
                No recipes found matching your search.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
