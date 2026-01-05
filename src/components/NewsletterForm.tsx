import React from 'react';
import AnimatedButton from './AnimatedButton';

const NewsletterForm = () => {
  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-3 md:p-4 mb-8">
      <h3 className="text-xl md:text-2xl font-medium text-white mb-4 tracking-wide text-center">
        Join Our Newsletter
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed text-center">
        Be the first to know about new projects, shop launches, and exclusive behind-the-scenes content.
      </p>
      <form
        action="https://thisisarchway.substack.com/api/v1/free?nojs=true"
        method="post"
        className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto"
      >
        <input 
          type="email" 
          name="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
          required
        />
        <input type="hidden" name="first_url" value="https://thisisarchway.com" />
        <input type="hidden" name="first_referrer" value="" />
        <input type="hidden" name="current_url" value="https://thisisarchway.com" />
        <input type="hidden" name="current_referrer" value="" />
        <input type="hidden" name="referral_code" value="" />
        <input type="hidden" name="source" value="embed" />
        <AnimatedButton type="submit" className="whitespace-nowrap">
          Subscribe
        </AnimatedButton>
      </form>
    </div>
  );
};

export default NewsletterForm;