import React from "react";
import Logo from "../media/life care hospital.png";
import FooterImg from "../media/Orthopedic Treatment.jpg";
import DoctorIcon from "../media/doctor-icon.png"; // Add an icon for doctors
import BedIcon from "../media/bed-icon.png"; // Add an icon for facilities
import Mission from "../media/mission.png";
import Vision from "../media/vision.png";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-blue-200 via-purple-300 to-pink-300">
      {/* Logo Section */}
      <div className="text-center mb-12">
        <img
          src={Logo}
          alt="Orthopedic Hospital"
          className="w-3/4 sm:w-1/2 mx-auto rounded-lg shadow-md transform transition-all duration-400 ease-in-out hover:scale-102 hover:shadow-lg hover:ring-2 hover:ring-blue-500"
        />
      </div>

      {/* Header Section */}
      <h2 className="text-5xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600 hover:text-blue-700 transition duration-300">
        Welcome to Our Orthopedic Hospital
      </h2>
      <p className="text-lg text-gray-800 mb-6 text-center leading-relaxed tracking-wide transform transition duration-500 hover:scale-105 hover:text-blue-500">
        Providing specialized orthopedic care with advanced treatment options
        and state-of-the-art facilities.
      </p>

      {/* Call to Action (CTA) Button */}
      <div className="text-center mb-12">
        <a
          href="#contact"
          className="bg-blue-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-blue-700 transform transition duration-300 hover:scale-105"
        >
          <Link to={"/appointment"}>Book an Appointment</Link>
        </a>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 px-4 md:px-8">
        {/* Expert Surgeons */}
        <div className="bg-white p-8 shadow-md rounded-2xl transform transition duration-300 hover:scale-103 hover:shadow-xl hover:bg-gradient-to-r from-green-400 to-blue-500">
          <div className="flex items-center mb-4">
            <img
              src={DoctorIcon}
              alt="Doctor Icon"
              className="w-16 h-16 mr-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Expert Orthopedic Surgeons
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our team of experienced orthopedic specialists is dedicated to
            providing top-quality care for bone, joint, and muscle issues.
          </p>
        </div>

        {/* Modern Facilities */}
        <div className="bg-white p-8 shadow-md rounded-2xl transform transition duration-300 hover:scale-103 hover:shadow-xl hover:bg-gradient-to-r from-purple-400 to-pink-600">
          <div className="flex items-center mb-4">
            <img
              src={BedIcon}
              alt="Hospital Bed Icon"
              className="w-16 h-16 mr-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Modern Facilities
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are equipped with the latest technology and infrastructure to
            ensure accurate diagnosis and effective treatment.
          </p>
        </div>
        {/* Mission */}
        <div className="bg-white p-8 shadow-md rounded-2xl transform transition duration-300 hover:scale-103 hover:shadow-xl hover:bg-gradient-to-r from-purple-400 to-pink-600">
          <div className="flex items-center mb-4">
            <img src={Mission} alt="Mission" className="w-16 h-16 mr-4" />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Mission
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            To provide exceptional orthopedic care with compassion, innovation,
            and a commitment to restoring mobility and improving quality of
            life.
          </p>
        </div>
        {/* Vision */}
        <div className="bg-white p-8 shadow-md rounded-2xl transform transition duration-300 hover:scale-103 hover:shadow-xl hover:bg-gradient-to-r from-green-400 to-blue-500">
          <div className="flex items-center mb-4">
            <img
              src={Vision}
              alt="Doctor Icon"
              className="w-16 h-16 mr-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">
              Vision
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
          To be a leading provider of orthopedic care, renowned for innovation, patient-centered treatments, and enhancing the well-being of communities we serve.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 p-12 rounded-2xl shadow-md text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          What Our Patients Say
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          "I had an excellent experience at this hospital. The surgeons and
          staff were very professional, and the care I received was
          exceptional."
        </p>
        <p className="text-lg text-gray-600 italic">- John Doe, Patient</p>
      </div>

      {/* Footer Image Section */}
      <div className="text-center mt-12">
        <img
          src={FooterImg}
          alt="Orthopedic Treatment"
          className="w-full rounded-lg shadow-md transform transition-all duration-400 ease-in-out hover:scale-102 hover:shadow-lg hover:ring-2 hover:ring-purple-500"
        />
      </div>

      {/* Contact Section */}
      <div id="contact" className="text-center mt-16">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
          Get In Touch
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          For more information or to schedule an appointment, please reach out
          to us.
        </p>
        <a
          href="tel:+1234567890"
          className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Call Us: +123 456 7890
        </a>
      </div>
    </div>
  );
};

export default Home;
