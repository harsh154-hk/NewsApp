import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewsPage from "./components/NewsPage";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const pageSize = 9;

  const fetchNews = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`
    );
    setArticles(response.data.articles);
    console.log(response.data.articles);
  };

  useEffect(() => {
    fetchNews();
  }, [page]); // 🔑 refetch when page changes

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                articles={articles}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route path="/news/:id" element={<NewsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
