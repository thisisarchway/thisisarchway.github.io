import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';

const NewsletterForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://thisisarchway.substack.com/api/v1/free?nojs=true', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setStatus('success');
      setMessage('Thanks for subscribing! Check your email to confirm.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-3 md:p-4 mb-8">
      <h3 className="text-xl md:text-2xl font-medium text-white mb-4 tracking-wide text-center">
        Join Our Newsletter
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed text-center">
        Be the first to know about new projects, shop launches, and exclusive behind-the-scenes content.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 max-w-sm mx-auto"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors disabled:opacity-50"
          required
          disabled={status === 'loading'}
          aria-label="Email address for newsletter subscription"
        />
        <input type="hidden" name="first_url" value="https://thisisarchway.com" />
        <input type="hidden" name="first_referrer" value="" />
        <input type="hidden" name="current_url" value="https://thisisarchway.com" />
        <input type="hidden" name="current_referrer" value="" />
        <input type="hidden" name="referral_code" value="" />
        <input type="hidden" name="source" value="embed" />
        <AnimatedButton type="submit" className="whitespace-nowrap" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </AnimatedButton>
      </form>
      {message && (
        <div
          className={`mt-4 text-center text-sm transition-opacity duration-300 ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
          role="alert"
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
