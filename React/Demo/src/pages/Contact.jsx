import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender: "",
    skill: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); //Convert to Array
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullName: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender: "",
      skill: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
        <div className="container">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="text-primary"
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="text-primary"
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="text-primary"
              />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="text-primary"
              />
            </div>

            <div>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="text-primary"
              />
            </div>

            <div>
              <label htmlFor="religion">Religion</label>
              <select
                name="religion"
                id="religion"
                onChange={handleChange}
                value={contactData.religion}
              >
                <option value="">--Select Religion--</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="christianity">Christianity</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="sikhism">Sikhism</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={contactData.gender === "male"}
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
              />{" "}
              Other
            </div>

            <div>
              <label htmlFor="skill">Skill known</label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
              />{" "}
              HTML
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
              />{" "}
              CSS
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "js"
                  )
                    ? true
                    : false
                }
              />{" "}
              JS
              <input
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).includes("react")
                }
              />{" "}
              React
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className="text-primary"
              ></textarea>
            </div>
            <div>
              <button type="reset" className="btn btn-danger">
                Clear Form
              </button>
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;



















































































 




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>

//     <!-- Bootstrap CSS -->
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">

//     <!-- Bootstrap Icons -->
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css">
// </head>

// <body class="bg-light">

//     <header class ="position-sticky top-0">
//         <div class="container-fluid bg-primary px-3 py-1 d-flex justify-content-between align-items-center ">
          
//           <div class="d-flex gap-3 align-items-center">
//               <img src="aryanphoto.jpg" alt="" width="50" height="50" class="rounded-circle">
//               <h1 class="text-light m-0">Registration Form</h1>
//           </div>

//             <button class="btn btn-info">Student Login</button>
//         </div>
//     </header>

//     <main>
//         <div class="container bg-white border border-5 border-info rounded shadow p-3 mt-3">

//           <!-- PERSONAL INFO -->
//           <div class="border border-dark p-3 pt-5 position-relative">
//             <span class="px-2 fs-5 position-absolute bg-white" style="top:-15px">Personal Information</span>

//              <div class="d-flex align-items-center mb-2">
//               <label for="fullName" class="form-label w-25">Full Name:<sup class="text-danger">*</sup></label>
//               <input type="text" name="fullName" id="fullName" class="form-control">
//             </div>

//             <div class="d-flex align-items-center mb-2">
//               <label for="email" class="form-label w-25">Email Address:<sup class="text-danger">*</sup></label>
//               <input type="email" name="email" id="email" class="form-control">
//             </div>

//             <div class="d-flex align-items-center mb-2">
//               <label for="mobile" class="form-label w-25">Mobile No.:<sup class="text-danger">*</sup></label>
//               <input type="number" name="mobile" id="mobile" class="form-control">
//             </div>

//             <div class="d-flex align-items-center">
//               <label for="Dob" class="form-label w-25">DOB:<sup class="text-danger">*</sup></label>
//               <input type="date" name="Dob" id="Dob" class="form-control">
//             </div>
//           </div>
          

// <!-- Academic INFO -->
// <div class="border border-dark p-3 pt-5 position-relative mt-4">
//     <span class="px-2 fs-5 position-absolute bg-white" style="top:-15px">Academic Information</span>

//     <div class="d-flex align-items-center mb-2">
//         <label class="form-label w-25">Select Qualification:<sup class="text-danger">*</sup></label>
//         <select class="form-select">
//             <option value="">-- Select Qualification --</option>
//             <option value="Graduation">Graduation</option>
//             <option value="Post Graduation">Post graduation</option>
//         </select>
//     </div>

//     <div class="d-flex align-items-center mb-2">
//         <label for="percentage" class="form-label w-25">Percentage/Grade:<sup class="text-danger">*</sup></label>
//         <input type="text" name="percentage" id="percentage" class="form-control">
//     </div>
// </div>     

//           <!-- COURSE INFO -->
//           <div class="border border-dark p-3 pt-5 position-relative mt-4">
//               <span class="px-2 fs-5 position-absolute bg-white" style="top:-15px">Course Information</span>

//               <div class="d-flex align-items-center mb-3">
//                   <label class="form-label w-25">Select Course:<sup class="text-danger">*</sup></label>
//                   <select class="form-select">
//                       <option value="">-- Select Course --</option>
//                       <option value="Full Stack Development">Full Stack Development</option>
//                       <option value="Data Science">Data Science</option>
//                       <option value="Python Programming">Python Programming</option>
//                       <option value="Web Designing">Web Designing</option>
//                   </select>
//               </div>

//               <div class="d-flex align-items-center">
//                   <label class="form-label w-25">Batch Timing:<sup class="text-danger">*</sup></label>

//                   <div class="d-flex gap-2">
//                       <div>
//                           <input type="checkbox" id="morning" name="batch">
//                           <label for="morning">Morning</label>
//                       </div>
//                         <div>
//                           <input type="checkbox" id="evening" name="batch">
//                           <label for="afternoon">Afternoon</label>
//                       </div>


//                       <div>
//                           <input type="checkbox" id="evening" name="batch">
//                           <label for="evening">Evening</label>
//                       </div>

//                       <div>
//                           <input type="checkbox" id="weekend" name="batch">
//                           <label for="weekend">Weekend</label>
//                       </div>
//                   </div>
//               </div>

//           </div>
//           <!-- ADDRESS INFO -->
// <div class="border border-dark p-3 pt-5 position-relative mt-4">
//     <span class="px-2 fs-5 position-absolute bg-white" style="top:-15px">Address</span>

//     <div class="d-flex align-items-start mb-2">
//         <label for="resAddress" class="form-label w-25">Residential Address:<sup class="text-danger">*</sup></label>
//         <textarea name="resAddress" id="resAddress" class="form-control" rows="3" placeholder="House No., Street, City, Pin Code"></textarea>
//     </div>

//     <div class="d-flex align-items-center mb-2">
//         <label for="city" class="form-label w-25">City:<sup class="text-danger">*</sup></label>
//         <input type="text" name="city" id="city" class="form-control">
//     </div>

//     <div class="d-flex align-items-center">
//         <label for="pincode" class="form-label w-25">Pin Code:<sup class="text-danger">*</sup></label>
//         <input type="number" name="pincode" id="pincode" class="form-control" maxlength="6">
//     </div>
// </div>
// <!-- GUARDIAN DETAILS -->
// <div class="border border-dark p-3 pt-5 position-relative mt-4">
//     <span class="px-2 fs-5 position-absolute bg-white" style="top:-15px">Guardian Details</span>

//     <div class="d-flex align-items-center mb-2">
//         <label for="guardianName" class="form-label w-25">Guardian’s Full Name:<sup class="text-danger">*</sup></label>
//         <input type="text" name="guardianName" id="guardianName" class="form-control">
//     </div>

//     <div class="d-flex align-items-center">
//         <label for="guardianMobile" class="form-label w-25">Guardian’s Contact No.:<sup class="text-danger">*</sup></label>
//         <input type="number" name="guardianMobile" id="guardianMobile" class="form-control">
//     </div>
// </div>


//         <!-- ADDITIONAL INFORMATION -->
// <div class="border border-dark p-3 pt-5 position-relative mt-4">
//     <span class="px-2 fs-5 position-absolute bg-white" style="top:-15px">Additional Information</span>

//     <div class="d-flex align-items-center">
//         <label for="refSource" class="form-label w-25">How did you hear about us?:<sup class="text-danger">*</sup></label>

//         <select class="form-select" id="refSource">
//             <option value="">-- Select Option --</option>
//             <option value="Friends">Friends</option>
//             <option value="Online Ad">Online Ad</option>
//             <option value="Newspaper">Newspaper</option>
//             <option value="Social Media">Social Media</option>
//             <option value="Other">Other</option>
//         </select>
//     </div>
    
// </div>
// <!-- SPECIAL REQUIREMENTS -->
// <div class="border border-dark p-3 pt-5 position-relative mt-4">
//     <span class="px-2 fs-5 position-absolute bg-white" style="top:-15px">Special Requirements</span>

//     <div class="d-flex align-items-start">
//         <label for="specialReq" class="form-label w-25">Special Requirements:</label>
//         <textarea name="specialReq" id="specialReq" class="form-control" rows="3" placeholder="Write any additional needs or preferences..."></textarea>
//     </div>
// </div>



  
//     </main>

   
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
//     <script src="script.js"></script>

// </body>
// </html>
