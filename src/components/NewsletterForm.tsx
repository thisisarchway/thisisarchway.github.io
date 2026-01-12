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
    <div className="p-8 md:p-12 rounded-lg group relative transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)] hover:scale-[1.01] bg-white/[0.02] hover:bg-white/[0.04] mb-8">
      {/* Large atmospheric radial gradient glow */}
      <div className="absolute -inset-20 bg-gradient-radial from-white/[0.12] via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Atmospheric fog-like overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-4 tracking-wide text-center">
          Join Our Newsletter
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed text-center group-hover:text-gray-300 transition-colors duration-700">
          Be the first to know about new projects, shop launches, and exclusive behind-the-scenes content.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 disabled:opacity-50"
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
    </div>
  );
};

export default NewsletterForm;
