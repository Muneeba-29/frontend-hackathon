// components/HijabCard.jsx
import React, { useState } from "react";

function HijabCard({ name, image, price }) {
  const [review, setReview] = useState("");

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId"); 
    if (!userId) return alert("You must be logged in to submit a review.");

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/reviews/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: name,
          userId,
          comment: review,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Review submitted successfully!");
        setReview("");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition h-full flex flex-col text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-2 flex flex-col h-full">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mb-4">${price}</p>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review"
          rows={2}
          className="w-full border border-pink-300 rounded-md p-2 resize-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-auto"
        />
        <button
          onClick={handleSubmit}
          className="mt-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md py-1"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default HijabCard;
