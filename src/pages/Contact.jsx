import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-lg shadow-lg">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Reach out to us for any inquiries or assistance. We are here to help you.
        </p>
      </div>

      {/* Contact Form & Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Contact Info Boxes */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">📍 Address</h3>
            <p className="text-gray-600">123 Health St, Wellness City, WC 45678</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">📞 Phone</h3>
            <p className="text-blue-600 hover:underline">
              <a href="tel:+1234567890">+123 456 7890</a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">📧 Email</h3>
            <p className="text-blue-600 hover:underline">
              <a href="mailto:info@hospital.com">info@hospital.com</a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Full-Width Google Map Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Find Us on Google Maps</h3>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.65489706415!2d75.95609847524183!3d27.38649117636791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d0facfb2b5677%3A0x7109b8781c1f31ff!2sLife%20Care%20Hospital!5e0!3m2!1sen!2sin!4v1736087559653!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
            title="Google Map"
          ></iframe>
        </div>
      </div>

    </div>
  );
};

export default Contact;
