import React from "react";

const MovieDetails = () => {
  // Example data (Replace this with actual data)
  const movie = {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    createdAt: "July 16, 2010",
    imageUrl:
      "https://images.pexels.com/photos/4328298/pexels-photo-4328298.jpeg?auto=compress&cs=tinysrgb&w=600",
    ratings: [
      { username: "User1", rating: 5 },
      { username: "User2", rating: 4.5 },
      { username: "User3", rating: 4 },
    ],
  };

  const averageRating =
    movie.ratings.reduce((acc, cur) => acc + cur.rating, 0) /
    movie.ratings.length;
  const numberOfRatings = movie.ratings.length;

  return (
    <div className="bg-zinc-900 text-yellow-500 min-h-screen p-10 flex flex-col items-center">
      {/* Movie Image and Details */}
      <div className="flex flex-col lg:flex-row w-full max-w-4xl gap-10">
        {/* Movie Image */}
        <div className="flex-none w-full lg:w-1/2">
          <img
            src={movie.imageUrl}
            alt={movie.title}
            className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
        </div>

        {/* Movie Details */}
        <div className="flex-none w-full lg:w-1/2">
          {/* Movie Title */}
          <h1 className="text-4xl font-bold mb-4 hover:text-yellow-400 transition-colors">
            {movie.title}
          </h1>
          {/* Created At */}
          <p className="text-sm text-gray-400 mb-4">
            Released on: {movie.createdAt}
          </p>
          {/* Rating */}
          <p className="text-lg font-semibold mb-4">
            Rating: {averageRating.toFixed(1)} ⭐ ({numberOfRatings})
          </p>
        </div>
      </div>

      {/* Movie Description */}
      <p className="text-lg leading-relaxed mb-8 max-w-4xl text-center mt-10">
        {movie.description}
      </p>

      {/* Ratings Section */}
      <div className="w-full max-w-4xl bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
        <ul className="mb-6 divide-y divide-zinc-700">
          {movie.ratings.map((rating, index) => (
            <li
              key={index}
              className="flex justify-between py-2 text-gray-300"
            >
              <span>{rating.username}</span>
              <span>{rating.rating} ⭐</span>
            </li>
          ))}
        </ul>

        {/* Average Rating */}
        <div className="flex justify-between font-bold text-lg text-gray-100">
          <span>Average Rating:</span>
          <span>
            {averageRating.toFixed(1)} ⭐ ({numberOfRatings} Ratings)
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
