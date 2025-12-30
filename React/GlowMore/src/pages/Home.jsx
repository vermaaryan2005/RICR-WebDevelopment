import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center bg-light py-4">
        <h1 className="fw-bold mb-3 text-danger">Welcome to GlowMore 💄</h1>
        <img
          src="https://www.sugarcosmetics.com/cdn/shop/files/Ultrastay-Set-of-3-GWP-Offer-HP_3200-X-1200_3b80153e-6977-45a3-81ed-7fcb42df53e0.jpg?v=1765194202&width=2000"
          alt=""
          className="img-fluid rounded shadow"
        />
      </div>

     
      <div className="container my-5">
        <img
          src="https://www.sugarcosmetics.com/cdn/shop/files/SUGAR-Chrismtas-Kit--HP-3200x1200.jpg?v=1765863008&width=2000"
          alt=""
          className="img-fluid rounded shadow"
        />
      </div>

      <div className="container mb-5">
        <div className="d-flex justify-content-center">
          <img
            src="https://media6.ppl-media.com//tr:dpr-2,dpr-2/mediafiles/ecomm/misc/1751372170_3-in-1-enhancer-category-1298-x-418.jpg"
            alt=""
            className="img-fluid sheet rounded shadow"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
