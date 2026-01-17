import Contact from '../models/contactModel.js';
export const NewContact = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, messgae } = req.body;

    if (!fullName || !email || !mobileNumber || !message) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const newContact = await Contact.create({
      fullName,
      email,
      mobileNumber,
      messgae,
    });

    console.log(newContact);

    res
      .status(201)
      .json({
        message:
          "Thanks for contacting us . we will get Back to you in 24 hours",
      });
  } catch (error) {
    next(error);
  }
};
