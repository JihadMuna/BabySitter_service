import React, { useState } from "react";
import { Link } from "react-router-dom";
import contactUsImage from "../assets/customer-service.jpg";

const ContactUs = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedRequestType, setSelectedRequestType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your form submission logic here
    // For simplicity, let's just show the success modal
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const requestTypes = [
    "General Inquiry",
    "Technical Support",
    "Billing Issue",
    "Other",
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <img src={contactUsImage} alt="contact-us" className="m-8" />

        <form
          onSubmit={handleSubmit}
          className="max-w-xl h-full w-full bg-gray-200 py-10 pl-8 pr-20 rounded shadow-md mb-4"
        >
          <div className="mb-4 ">
            <label
              htmlFor="firstName"
              className="inline-block text-lg font-medium text-gray-700"
            >
              First name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="input-field ml-2 px-6 rounded shadow-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="inline-block text-lg font-medium text-gray-700"
            >
              Last name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="input-field ml-2 px-6 rounded shadow-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="inline-block text-lg font-medium text-gray-700"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="input-field ml-2 rounded shadow-md px-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="inline-block text-lg font-medium text-gray-700"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="input-field ml-2 px-6 rounded shadow-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="requestType"
              className="inline-block text-lg font-medium text-gray-700"
            >
              Type of request<span className="text-red-500">*</span>
            </label>
            <select
              id="requestType"
              className="input-field ml-2 px-6 rounded shadow-md"
              required
              value={selectedRequestType}
              onChange={(e) => setSelectedRequestType(e.target.value)}
            >
              <option value="" disabled>
                Select Type
              </option>
              {requestTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="requestNature"
              className="inline-block text-lg font-medium text-gray-700"
            >
              The nature of the request<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="requestNature"
              className="input-field ml-2 px-6 rounded shadow-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="referenceDetails"
              className="inline-block text-lg font-medium text-gray-700"
            >
              Reference details<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="referenceDetails"
              className="input-field ml-2 p-6 rounded shadow-md"
              required
            />
          </div>

          <button
            type="submit"
            className="block mx-auto btn-submit rounded shadow-md py-2 px-12 mt-10 text-white bg-pink-500"
          >
            Submit
          </button>
        </form>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md text-center">
              <p className="text-xl sm:text-sm md:text-md font-bold mb-4">
                Message Sent Successfully!
              </p>
              {/* Use Link to navigate back to the home page */}
              <Link to="/" className="btn-submit" onClick={handleCloseModal}>
                Close
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUs;
