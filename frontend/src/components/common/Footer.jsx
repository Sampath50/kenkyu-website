import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Journal Publisher</h3>
            <p className="text-gray-400">Advancing research through open access publishing</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/journals" className="hover:text-white">Journals</a></li>
              <li><a href="/articles" className="hover:text-white">Articles</a></li>
              <li><a href="/submit" className="hover:text-white">Submit Paper</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Authors</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/guidelines" className="hover:text-white">Submission Guidelines</a></li>
              <li><a href="/ethics" className="hover:text-white">Publication Ethics</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: editor@journalpublisher.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kenkyu Publisher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;