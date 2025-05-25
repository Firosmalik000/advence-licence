import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 mt-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Text Content */}
        <div className=" flex flex-col justify-center   h-full">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">If you re a Sales Pro, Team Builder and/or Both, please fill out this form to get detailed information on Joining the Team and becoming a Licensing Broker Agency</p>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">First Name</label>
                <input type="text" placeholder="First Name" className="w-full border rounded px-3 py-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name</label>
                <input type="text" placeholder="Last Name" className="w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone</label>
              <input type="tel" placeholder="Phone" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Who referred you?</label>
              <input type="text" placeholder="Name/Initials" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Comments</label>
              <textarea placeholder="Message" className="w-full border rounded px-3 py-2" rows={4}></textarea>
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
