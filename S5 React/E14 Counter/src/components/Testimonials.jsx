import React, { useState } from "react";

function Testimonials() {
  const [CurrIndex, setCurrIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life !",
      author: "Bob Johnson",
    },
  ];

  const handlePrevClick = () => {
    setCurrIndex(
      (CurrIndex + testimonials.length - 1) % testimonials.length
    );
  };

  const handleNextClick = () => {
    setCurrIndex((CurrIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[CurrIndex].quote}
      </div>
      <div className="testimonials-author">
        - {testimonials[CurrIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;