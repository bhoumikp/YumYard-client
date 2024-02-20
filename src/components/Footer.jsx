import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div>
      <div class="bg-black">
        <div class="mx-auto py-5 px-5 flex flex-wrap flex-col sm:flex-row justify-center">
          <p class="text-gray-100 text-center sm:text-left">
            <b>Created By <span className="footerCredits"><a href="https://github.com/bhoumikp" target="_blank">Bhaumik P.</a></span> @ {currentYear} Yum Yard</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
