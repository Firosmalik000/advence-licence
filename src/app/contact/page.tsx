'use client';
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        'service_7li8mtf', // ganti
        'template_b0miw6q', // ganti
        form.current,
        'FWjZlyW--ybgR5SBH' // ganti
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Pesan berhasil dikirim!');
          form.current?.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Terjadi kesalahan. Silakan coba lagi.');
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 mt-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text Content */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            Whether you're looking to expand your current business through licensing or have a million-dollar idea you’re ready to take nationwide, now is the time to act. Fill out the form to receive in-depth information and claim your
            free consultation. Let’s find out together if licensing is the game-changing move your business needs.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">First Name</label>
                <input type="text" name="first_name" placeholder="First Name" className="w-full border rounded px-3 py-2" required onChange={(e) => setName({ ...name, firstName: e.target.value })} />
                <input type="hidden" name="name" value={`${name.firstName} ${name.lastName}`} />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name</label>
                <input type="text" name="last_name" placeholder="Last Name" className="w-full border rounded px-3 py-2" required onChange={(e) => setName({ ...name, lastName: e.target.value })} />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input type="text" name="phone" placeholder="Phone" className="w-full border rounded px-3 py-2" required />
            </div>

            <div>
              <label className="block mb-1 font-medium">Subject</label>
              <input type="text" name="subject" placeholder="Subject" className="w-full border rounded px-3 py-2" required />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" name="email" placeholder="Email" className="w-full border rounded px-3 py-2" required onChange={(e) => setName({ ...name, email: e.target.value })} />
            </div>

            <div>
              <label className="block mb-1 font-medium">Who referred you?</label>
              <input type="text" name="referrer" placeholder="Name/Initials" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea name="message" placeholder="Message" className="w-full border rounded px-3 py-2" rows={4} required></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
