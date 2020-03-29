import React from "react";
import "./GithubProfileInfo.css";

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
};

const GithubProfileInfo = ({
  name,
  thumbnail,
  bio,
  blog
}: GithubProfileInfoProps) => {
  return (
    <div className="GithubProfileInfo">
      <div className="profile-head">
        <img src={thumbnail} alt="user thubnail" />
        <div className={name}>{name}</div>
      </div>
      <p>{bio}</p>
      <div>
        {blog !== "" && (
          <a href={blog} target="_blank">
            블로그
          </a>
        )}
      </div>
    </div>
  );
};

export default GithubProfileInfo;
