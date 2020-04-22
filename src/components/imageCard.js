import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-3">
      <img src={image.webformatURL} alt="unsplash" className="w-full "></img>

      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-5">
          Photo By: {image.user}
        </div>

        <ul>
          <li>Views: {image.views}</li>
          <li>Download: {image.downloads}</li>
          <li>Likes: {image.likes}</li>
          <li>Favorites: {image.favorites}</li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-grey-700 mr-3 bg-pink-300"
          >
            #{tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
