import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gray-900 text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-900 rounded-full blur-3xl opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
       
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Ready to join the future?</h2>
          <p className="text-gray-400 text-lg">
            Spots for our pilot program are limited. Tell us about your challenge, and we'll get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <input
            type="email"
            placeholder="Work Email"
            className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          />
          <input
            type="text"
            placeholder="Company Name"
            className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
          />
          <textarea
            rows={4}
            placeholder="What is your biggest data pain point?"
            className="w-full px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
          ></textarea>
          
          <button
            type="submit"
            className="w-full py-5 rounded-xl bg-brand-500 text-white font-bold text-lg hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20 mt-4"
          >
            Request Early Access
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;