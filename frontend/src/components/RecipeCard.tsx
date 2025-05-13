"use client";

import { useState } from "react";
import type { Recipe } from "../types/recipe.ts";
import { RecipeViewDialog } from "./RecipeViewDialog";
import "../styles/RecipeCard.css";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isFavorite, setIsFavorite] = useState(true);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="recipe-card">
        <div className="recipe-image-container">
          <img
            src={recipe.image || "https://via.placeholder.com/400x300"}
            alt={recipe.title}
            className="recipe-image"
          />
          <button
            className={`favorite-button ${isFavorite ? "active" : ""}`}
            onClick={handleToggleFavorite}
          >
            {isFavorite ? <img width="14px" height="14px" src="..\src\assets\icons\fav-heart.png" alt="liked" /> : <img width="14px" height="14px" src="..\src\assets\icons\fav-empty-heart.png" alt="unliked" /> }
          </button>
        </div>

        <div className="recipe-header">
          <div className="recipe-title-container">
            <h3 className="recipe-title">{recipe.title}</h3>
            <p className="recipe-author">{recipe.author}</p>
          </div>
         <div className="recipe-rating"> <span className="user_icon"><img  src="..\src\assets\icons\star.png" alt="star" /></span>{recipe.rating}</div>
        </div>

        <div className="recipe-content">
          <div className="recipe-tags">
            <span className="recipe-category">{recipe.category}</span>
            {recipe.tags.map((tag, index) => (
              <span key={index} className="recipe-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="recipe-time"> <img className="icon" src="..\src\assets\icons\clock.png" alt="clock" /> {recipe.cookTime} mins</div>
        </div>

        <div className="recipe-footer">
          <button
            className="view-recipe-button"
            onClick={() => setIsViewOpen(true)}
          >
            View Recipe
          </button>
          <a className="share-button"href="share.com"><img className="icon" src="..\src\assets\icons\share.png" alt="share" /></a>
        </div>
      </div>

      {isViewOpen && (
        <RecipeViewDialog
          recipe={recipe}
          onClose={() => setIsViewOpen(false)}
        />
      )}
    </>
  );
}
