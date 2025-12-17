import { useLocation, useNavigate } from "react-router-dom";

export default function NewsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const article = location.state?.article;

  // Safety check (direct URL access)
  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10 text-center">
        <p className="text-lg font-semibold mb-4">
          Article not found
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-orange-500 font-semibold hover:underline"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4">
        {article.title}
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        {article.author || "Unknown Author"}
      </p>

      <img
        src={article.urlToImage || "https://via.placeholder.com/800"}
        alt="news"
        className="w-full rounded-xl mb-6"
      />

      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {article.content || article.description}
      </p>

      <a
        href={article.url}
        target="_blank"
        className="inline-block mt-6 text-orange-500 font-semibold hover:underline"
      >
        Read full article →
      </a>
    </div>
  );
}
