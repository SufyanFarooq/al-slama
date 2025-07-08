import React from "react";

const ContactForm = () => (
  <section id="contact" className="py-16 bg-white">
    <div className="container mx-auto px-4 max-w-xl">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Request a Call Back</h2>
      <form className="bg-gray-50 rounded-lg shadow p-8 space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Phone</label>
          <input type="tel" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Phone Number" />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" rows="4" placeholder="How can we help you?"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition">Request a Callback</button>
      </form>
    </div>
  </section>
);

export default ContactForm; 