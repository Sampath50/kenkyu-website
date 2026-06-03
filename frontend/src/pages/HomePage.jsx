import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredArticles = [
    { id: 1, title: "Advances in AI Research", author: "Dr. Sarah Johnson", views: 1234 },
    { id: 2, title: "Climate Change Impact Study", author: "Prof. Michael Chen", views: 987 },
    { id: 3, title: "New Frontiers in Medicine", author: "Dr. Emily Williams", views: 756 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to Kenkyu Publisher</h1>
            <p className="text-xl mb-8">Advancing academic research through open access publishing</p>
            <div className="space-x-4">
              <Link to="/journals" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Browse Journals
              </Link>
              <Link to="/submit" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition">
                Submit Paper
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="card p-6">
            <div className="text-4xl font-bold text-primary-600">50+</div>
            <div className="text-gray-600 mt-2">Journals</div>
          </div>
          <div className="card p-6">
            <div className="text-4xl font-bold text-primary-600">1000+</div>
            <div className="text-gray-600 mt-2">Published Articles</div>
          </div>
          <div className="card p-6">
            <div className="text-4xl font-bold text-primary-600">5000+</div>
            <div className="text-gray-600 mt-2">Authors</div>
          </div>
          <div className="card p-6">
            <div className="text-4xl font-bold text-primary-600">200+</div>
            <div className="text-gray-600 mt-2">Reviewers</div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map(article => (
            <div key={article.id} className="card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.views} views</span>
                  <Link to={`/articles/${article.id}`} className="text-primary-600 hover:text-primary-700">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;