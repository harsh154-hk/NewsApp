import { Link } from "react-router-dom";

export default function Home({ articles, page, setPage }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 mt-16 ">
      <h1 className="text-3xl font-bold mb-8 text-center">Latest News</h1>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {articles.map((elem, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={elem.urlToImage || "https://via.placeholder.com/400"}
              alt="news"
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h2 className="font-bold text-lg mb-2">{elem.title}</h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                {elem.description}
              </p>

              <Link
                to={`/news/${idx}`}
                state={{ article: elem }}
                className="mt-4 text-orange-500 font-semibold text-sm hover:underline self-start"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow font-semibold disabled:opacity-50"
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="font-semibold">Page {page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
}
