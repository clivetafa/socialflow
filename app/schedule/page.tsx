"use client";
import { useState } from "react";

export default function Schedule() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold">Schedule Posts</h1>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Create Post
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-xl w-96">
            <h2 className="text-xl font-bold mb-4">Schedule a Post</h2>

            <input
              placeholder="Post title"
              className="w-full p-2 mb-3 bg-gray-700 text-white rounded"
            />

            <button
              onClick={() => setOpen(false)}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save Schedule
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
