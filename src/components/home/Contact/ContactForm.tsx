import React from 'react';

export default function ContactForm() {
  const [status, setStatus] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full max-w-lg mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Your Name
        </label>
        <input
          type="text"
          required
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Email
        </label>
        <input
          type="email"
          required
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
          Message
        </label>
        <textarea
          required
          rows={4}
          className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        ></textarea>
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
      >
        Send Message
      </button>
      {status && (
        <div className="text-green-600 text-center text-sm sm:text-base">{status}</div>
      )}
    </form>
  );
}