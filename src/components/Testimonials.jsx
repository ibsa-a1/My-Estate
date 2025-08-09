import React from "react";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-10 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Real Stories From Those Who Found Home With Us
      </p>
    </div>
  );
};

export default Testimonials;
