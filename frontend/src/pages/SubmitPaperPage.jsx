import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitPaperPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    keywords: '',
    authors: [{ name: '', email: '', affiliation: '' }]
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuthorChange = (index, field, value) => {
    const authors = [...formData.authors];
    authors[index][field] = value;
    setFormData({ ...formData, authors });
  };

  const addAuthor = () => {
    setFormData({
      ...formData,
      authors: [...formData.authors, { name: '', email: '', affiliation: '' }]
    });
  };

  const removeAuthor = (index) => {
    const authors = formData.authors.filter((_, i) => i !== index);
    setFormData({ ...formData, authors });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This will connect to backend once ready
    console.log('Submitting:', formData);
    alert('Paper submitted successfully! (Demo)');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Submit Your Manuscript</h1>
        <p className="text-gray-600 mb-8">Share your research with the global academic community</p>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Paper Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter the full title of your paper"
            />
          </div>

          {/* Authors */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Authors *</label>
            {formData.authors.map((author, index) => (
              <div key={index} className="border rounded-lg p-4 mb-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={author.name}
                    onChange={(e) => handleAuthorChange(index, 'name', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={author.email}
                    onChange={(e) => handleAuthorChange(index, 'email', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Affiliation"
                    value={author.affiliation}
                    onChange={(e) => handleAuthorChange(index, 'affiliation', e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeAuthor(index)}
                    className="text-red-600 text-sm mt-2"
                  >
                    Remove Author
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addAuthor} className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm">
              + Add Author
            </button>
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Abstract *</label>
            <textarea
              name="abstract"
              value={formData.abstract}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              placeholder="Enter your abstract (200-300 words)"
            />
          </div>

          {/* Keywords */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Keywords</label>
            <input
              type="text"
              name="keywords"
              value={formData.keywords}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="e.g., Artificial Intelligence, Machine Learning (comma separated)"
            />
          </div>

          {/* File Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Manuscript File *</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full"
              required
            />
            <p className="text-gray-500 text-sm mt-1">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={() => navigate('/')} className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg">
              Cancel
            </button>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Submit Manuscript
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitPaperPage;