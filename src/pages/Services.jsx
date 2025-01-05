import React from 'react';
import MedicineIcon from '../media/medicine-icon.png';
import EmergencyIcon from '../media/emergency-icon.jpg';
import SurgeryIcon from '../media/surgery-icon.png';
import DiagnosticsIcon from '../media/diagnostic-icons.png';
import { Link } from 'react-router';

const Services = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50">

      {/* Hero Section */}
      <div className="relative bg-blue-100 rounded-lg shadow-xl p-12 mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Medical Services</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Comprehensive healthcare solutions tailored to your needs. We prioritize patient care, comfort, and advanced treatment.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

        {/* Service Card - General Medicine */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <img src={MedicineIcon} alt="General Medicine" className="w-20 h-20 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">General Medicine</h3>
          <p className="text-gray-600">Comprehensive care for patients of all ages with a focus on long-term health.</p>
        </div>

        {/* Service Card - Emergency Care */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
          <div className="bg-red-100 p-4 rounded-full mb-4">
            <img src={EmergencyIcon} alt="Emergency Care" className="w-20 h-20 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Emergency Care</h3>
          <p className="text-gray-600">24/7 emergency services to address critical health situations promptly.</p>
        </div>

        {/* Service Card - Surgery */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <img src={SurgeryIcon} alt="Surgery" className="w-20 h-20 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Surgery</h3>
          <p className="text-gray-600">Cutting-edge surgical procedures for various health conditions.</p>
        </div>

        {/* Service Card - Diagnostics */}
        <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-transform transform hover:scale-105">
          <div className="bg-yellow-100 p-4 rounded-full mb-4">
            <img src={DiagnosticsIcon} alt="Diagnostics" className="w-20 h-20 mx-auto" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Diagnostics</h3>
          <p className="text-gray-600">Accurate diagnostic services using advanced medical technology.</p>
        </div>

      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12 bg-blue-600 py-8 px-6 rounded-lg shadow-xl text-white">
        <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
        <p className="text-lg mb-6">Book an appointment with our experienced healthcare professionals today!</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 py-3 px-8 rounded-full text-xl font-semibold hover:bg-blue-700 hover:text-white transition-transform transform hover:scale-110"
        >
          <Link to={"/appointment"}>Book an Appointment</Link>
        </a>
      </div>

    </div>
  );
};

export default Services;
