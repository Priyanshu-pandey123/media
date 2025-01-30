import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

export function Gallery({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden mb-6">
      {/* Author Section */}
      <div className="p-4 flex items-center space-x-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{post.author.name}</h3>
          <p className="text-sm text-gray-500">
            @{post.author.username} • {post.timestamp}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-video">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600">{post.content}</p>
      </div>

      {/* Interaction Buttons */}
      <div className="px-4 pb-4 flex items-center space-x-6">
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 ${
            liked ? "text-red-500" : "text-gray-600"
          } hover:text-red-500 transition-colors`}
        >
          <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
          <span>{likes}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments}</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
          <Share2 className="w-5 h-5" />
          <span>{post.shares}</span>
        </button>
      </div>
    </div>
  );
}
