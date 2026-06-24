"use client";

import { useState } from 'react';

function ContactFormResend() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setStatus('submitting');

    const res = await fetch('/api/send-resend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, message }),
    });

    setStatus(res.ok ? 'success' : 'error');
  }

  if (status === 'success') {
    return <p>Thanks! Your message was sent.</p>;
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="resend-email">Email Address</label>
      <input
        id="resend-email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      <textarea
        id="resend-message"
        name="message"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-300 p-2 rounded"
      />
      {status === 'error' && (
        <p className="text-red-500 text-sm">Failed to send. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit'}
      </button>
    </form>
    </>
  );
}

export default ContactFormResend;