"use client";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import { FaHeart } from "react-icons/fa";
import Classes from "../../styles/Pages/Favourite.module.scss";

const Favourite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favouritePosts")) || [];
    setFavorites(savedFavorites);
  }, []);
  return (
    <>
      <div className={Classes.container}>
        <h1 className={Classes.pageTitle} style={{ marginTop: "20px" }}>
          Your Favorite Posts <FaHeart color="red" />
        </h1>

        {favorites.length === 0 ? (
          <p>
            Your Favorite Page is empty <FaHeart color="red" />
          </p>
        ) : (
          favorites.map((post) => (
            <Post key={post.id} {...post} addFavorite={() => {}} />
          ))
        )}
      </div>
    </>
  );
};

export default Favourite;
