import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getJournals } from '../services/api';

const JournalsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [journals, setJournals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      const response = await getJournals();
      setJournals(response.data);
    } catch (err) {
      console.error('Error fetching journals:', err);
      setError('Failed to load journals');
      // Use demo data if backend not ready
      setJournals([
        { id: 1, name: "International Journal of AI Research", issn: "1234-5678", impactFactor: 4.5, articles: 234, openAccess: true },
        { id: 2, name: "Journal of Medical Sciences", issn: "8765-4321", impactFactor: 3.8, articles: 189, openAccess: true },
        { id: 3, name: "Environmental Science Review", issn: "5678-1234", impactFactor: 5.2, articles: 156, openAccess: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredJournals = journals.filter(journal =>
    journal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">Loading journals...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Journals</h1>
        <p className="text-gray-600 text-lg">Browse our collection of peer-reviewed journals</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search journals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Journals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJournals.map((journal) => (
          <div key={journal.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{journal.name}</h3>
              {journal.openAccess && (
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Open Access</span>
              )}
            </div>
            <div className="space-y-2 text-gray-600">
              <p>ISSN: {journal.issn}</p>
              <p>Impact Factor: {journal.impactFactor}</p>
              <p>Articles Published: {journal.articles}</p>
            </div>
            <div className="mt-4 flex space-x-3">
              <Link to={`/journals/${journal.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                Browse Articles
              </Link>
              <Link to={`/submit?journal=${journal.id}`} className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-600 hover:text-white">
                Submit Paper
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalsPage;