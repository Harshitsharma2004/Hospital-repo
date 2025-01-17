import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '',
    department: '',
    doctorName: '',
  });

  // Predefined departments and corresponding doctors
  const departments = {
    Cardiology: ['Dr. John Smith', 'Dr. Emily Clark'],
    Neurology: ['Dr. Sarah Johnson', 'Dr. Michael Lee'],
    Pediatrics: ['Dr. Sophia Brown', 'Dr. Liam Davis'],
    Orthopedics: ['Dr. Emma Wilson', 'Dr. Noah Martinez'],
  };

  // Initialize EmailJS Public Key (do this once, typically in your App component or root component)
  useEffect(() => {
    emailjs.init('xOAI0JtEd5nzTKfye');  // Initialize with your **Public Key**
  }, []);

  // Toggle modal visibility
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Reset doctor name when department changes
  const handleDepartmentChange = (e) => {
    const department = e.target.value;
    setFormData({ ...formData, department, doctorName: '' });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const patientTemplateParams = {
      patientName: formData.patientName,
      email: formData.email,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime,
      department: formData.department,
      doctorName: formData.doctorName,
    };

    const hospitalTemplateParams = {
      patientName: formData.patientName,
      hospitalName: 'Life Care Multispeciality Hospital',  // Replace with actual hospital name
      email: formData.email,
      phone: formData.phone,
      appointmentDate: formData.appointmentDate,
      appointmentTime: formData.appointmentTime,
      department: formData.department,
      doctorName: formData.doctorName,
      hospitalEmail: 'hospital@example.com', // Replace with actual hospital email
      hospitalPhone: '123-456-7890',         // Replace with actual hospital phone number
      hospitalAddress: '123 Hospital St, City, Country', // Replace with actual hospital address
    };

    // Send email to patient
    emailjs.send(
      'service_egw4qoe', // Service ID
      'template_3jpnkri', // Replace with your patient template ID
      patientTemplateParams
    ).then(
      (response) => {
        console.log('SUCCESS (patient):', response.status, response.text);
      },
      (error) => {
        console.error('FAILED (patient):', error);
      }
    );

    // Send email to hospital
    emailjs.send(
      'service_egw4qoe', // Service ID
      'template_5lvgfer', // Replace with your hospital template ID
      hospitalTemplateParams
    ).then(
      (response) => {
        console.log('SUCCESS (hospital):', response.status, response.text);
        alert('Your appointment has been booked successfully!');
        setIsModalOpen(false);
      },
      (error) => {
        console.error('FAILED (hospital):', error);
        alert('Failed to send appointment details. Please try again.');
      }
    );
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Book an Appointment</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Schedule your appointment with us quickly and easily.
        </p>
        <button
          onClick={toggleModal}
          className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 mt-6"
        >
          Book Now
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book an Appointment</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
                <input
                  type="time"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Department</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleDepartmentChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  {Object.keys(departments).map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Doctor's Name</label>
                <select
                  name="doctorName"
                  value={formData.doctorName}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={!formData.department}
                >
                  <option value="" disabled>
                    {formData.department ? 'Select Doctor' : 'Select Department First'}
                  </option>
                  {formData.department &&
                    departments[formData.department].map((doctor) => (
                      <option key={doctor} value={doctor}>
                        {doctor}
                      </option>
                    ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Confirm Appointment
              </button>
              <button
                type="button"
                onClick={toggleModal}
                className="text-white hover:text-gray-700 mt-4 block text-center bg-red-400 hover:bg-red-500 py-3 px-3 rounded-full"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
