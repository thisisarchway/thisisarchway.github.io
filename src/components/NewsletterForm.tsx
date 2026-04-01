import React, { useState } from 'react';
import AnimatedButton from './AnimatedButton';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-3xl text-white mb-4 font-zuume">Join the Newsletter</h3>
      <p className="text-gray-400 mb-6">Be the first to hear about new projects and opportunities.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-6 py-4 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white"
          required
          disabled={status === 'loading'}
        />
        <AnimatedButton 
          type="submit" 
          className="whitespace-nowrap" 
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Signing up...' : 'Subscribe'}
        </AnimatedButton>
      </form>
      {status === 'success' && (
        <p className="text-green-400 mt-4">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 mt-4">Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default NewsletterForm;