import React from 'react';
import HospitalBuilding from '../media/hospital.jpg'; // Add a hospital building image
import DoctorTeam from '../media/doctor-team.avif'; // Add a doctor team image

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are committed to providing compassionate, personalized, and high-quality healthcare services to all our patients.
        </p>
      </div>

      {/* Mission, Vision, Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        
        {/* Mission */}
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To deliver exceptional orthopedic care with compassion, innovation, and excellence, ensuring the best outcomes for our patients.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To be the leading orthopedic hospital, recognized for our commitment to providing world-class healthcare services.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
          <h3 className="text-2xl font-bold mb-4 text-purple-600">Our Core Values</h3>
          <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
            <li>Compassion</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Innovation</li>
            <li>Teamwork</li>
          </ul>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Our History</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Established in 2005, our hospital has grown from a small orthopedic clinic to a state-of-the-art healthcare facility. Over the years, we have served thousands of patients with cutting-edge treatment and personalized care.
        </p>
      </div>

      {/* Team Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
        <p className="text-lg text-gray-600 mb-6">
          Our team of experienced orthopedic surgeons, nurses, and support staff are dedicated to providing the best care possible.
        </p>
        <img 
          src={DoctorTeam} 
          alt="Doctor Team" 
          className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contact Section */}
      <div className="bg-blue-100 p-8 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-bold text-blue-800 mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-700 mb-4">
          Have questions or need assistance? Our team is here to help. Feel free to reach out to us anytime.
        </p>
        <a 
          href="tel:+1234567890" 
          className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Call Us: +123 456 7890
        </a>
      </div>

      {/* Footer Image */}
      <div className="text-center mt-12">
        <img 
          src={HospitalBuilding} 
          alt="Hospital Building" 
          className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default About;
