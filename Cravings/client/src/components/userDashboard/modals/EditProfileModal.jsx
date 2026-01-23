import React, { useState } from "react";
import toast from "react-hot-toast";
import  { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import api from"../../../config/Api"



const EditProfileModal = ({ onClose }) => {
const{user}=useAuth();
useEffect(() => {
  if (user) {
    setFormData({
      fullName: user.fullName || "",
      email: user.email || "",
      mobileNumber: user.mobileNumber || "",
      password: "",
      confirmPassword: "",
    });
  }
}, [user]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.put("/user/update", formData);
      toast.success(res.data.message);
      handleClearForm();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-100'>
      <div className='bg-amber-100 w-5xl  max-h-[85vh]  overflow-y-auto'>
         {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
             Edit Profile
            </h1>
            <p className="text-lg text-gray-600">
              Chenge the Profile
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-amber-100 rounded-xl shadow-2xl overflow-hidden">
            <form
              onSubmit={handleSubmit}
              onReset={handleClearForm}
              className="p-8"
            >
              {/* Personal Information */}
              <div className="mb-10">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder=  {user.fullName}
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      
                      className="w-full h-fit px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200" 
                    />
                    
                    {validationError.fullName && (
                      <span className="text-xs text-red-500">
                        {validationError.fullName}
                        
                      </span>
                   
                    )
                    
                    }
                    
                  </div>
                 
                  <input
                    type="tel"
                    name="mobileNumber"
                    placeholder=   {user.mobileNumber}
                    maxLength="10"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"

                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder={user.password}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder={user.confirmPassword}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 border-2 border-black-300 rounded-lg focus:outline-none focus:border-indigo-500 transition disabled:cursor-not-allowed disabled:bg-gray-200"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8 border-t-2 border-black-200">
                <button
                  type="reset"
                  disabled={isLoading}
                  className="flex-1 bg-red-500 text-gray-800 font-bold py-4 px-6 rounded-lg hover:bg-red-400 transition duration-300 transform hover:scale-105 disabled:scale-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
                  onClick={()=>onClose()}
                >
                  Clear From
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-linear-to-r from-green-600 to-indigo-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-green-800 transition duration-300 transform hover:scale-105 shadow-lg disabled:scale-100 disabled:bg-gray-300  disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting" : "Submit"}
                </button>
                
              </div>
             
            </form>
          </div>
         
         
         
         
          
        </div>
      </div>
         
    </>
  );
};

export default EditProfileModal;