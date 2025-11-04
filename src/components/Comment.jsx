import { useState } from "react";

export default function CommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", formData);
    setFormData({ name: "", email: "", comment: "" });
    alert("Comment submitted!");
  };

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold text-[#F26F21] mb-4">
        Leave a Comment
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-gray-400">
        <div className="flex md:flex-row w-5/5 gap-10">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div className="w-full ">
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="block text-sm text-gray-700 font-semibold mb-1">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            placeholder="Write your comment..."
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-[#F26F21] text-white font-semibold rounded-md hover:bg-[#FF4718] cursor-pointer transition-colors"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
}
