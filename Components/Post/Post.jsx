"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Classes from "../../styles/Pages/Post.module.scss";

const Post = ({ id, url,name, caption, likes,tags,comments, addFavorite }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    if (isFavorited === false) {
      setIsFavorited(true);
      addFavorite(id, isFavorited);
    }
  };

  return (
    <>
      <div className={Classes.container}>
        <section >
            <div className={Classes.roundedThumbnail} >
              <Image  alt="NoonLogo" src="data:image/png;base64,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" width={100} height={100}></Image>
            </div>
              <p style={{color:'white'}}>Noon</p>
          <div className={Classes.card}>
            <Image
              className={Classes.image}
              src={url}
              alt={name}
              width={400}
              height={200}
              style={{width: "auto", height: "auto"}}
            ></Image>
            <div >
              <div className={Classes.top}>
                <div className={Classes.likesContainer}>
                  <button
                    className={Classes.btnLike}
                    onClick={handleFavoriteClick}
                  >
                    <FaHeart style={{color :isFavorited?'red':'grey',height:'30px',width:'30px'}}
                    ></FaHeart>
                  </button>
                  </div>
                  <p className={Classes.likesNo}> {likes} Likes </p>
              </div>
              <div className={Classes.middle}>
                <p className={Classes.caption}>{caption}</p>
              </div>
              <footer >
                <p className={Classes.tags} >{tags}</p>
                <p className={Classes.comments} >{comments}</p>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Post;
