"use client"
import { postsData } from '@/Data/postsData';
import React, {useEffect, useState } from 'react';
import Post from '../Post/Post';
import Classes from '../../styles/Pages/PostListing.module.scss';

const PostsListing = () => {
    const [posts,setPosts]=useState(postsData);
    const [favouriteId, setFavouriteId] = useState(null);
    const addFavorite = (id) => {
      setPosts(oldPosts => oldPosts.map(post => post.id !== id ? post : {...post, likes: post.likes + 1} ));
      setFavouriteId(id);
    };
  
    useEffect(() => {
      if (favouriteId !== null) {
        const favouritePosts = JSON.parse(localStorage.getItem('favouritePosts')) || [];
        if (favouritePosts.some(fav => fav.id === favouriteId)) {
          const newFavouritePosts = favouritePosts.filter(fav => fav.id !== favouriteId);
          localStorage.setItem("favouritePosts", JSON.stringify(newFavouritePosts));
        } else {
          const postToAdd = posts.find(post => post.id === favouriteId);
          if (postToAdd) {
            favouritePosts.push(postToAdd);
            localStorage.setItem("favouritePosts", JSON.stringify(favouritePosts));
          }
        }
        setFavouriteId(null); 
      }
    }, [favouriteId,posts]);

  
    useEffect(()=>{
      localStorage.clear();
    },[])

    return (
        <div className={Classes.container} >
            {
              posts.map((post)=>(
                <Post key={post.id}  {...post} addFavorite={addFavorite}/>
              ))
            }
        </div>
    );
};

export default PostsListing;