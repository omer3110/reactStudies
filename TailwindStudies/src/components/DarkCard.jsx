import React from "react";

function DarkCard() {
  return (
    <div className="bg-primary-700 text-base-110 py-10 text-center md:text-left md:w-1/2 md:p-0">
      <h2 className=" font-dm-serif text-5xl px-3 md:p-0">
        {" "}
        Humanizing your insurance.
      </h2>
      <p className=" px-4 py-6 font-karla font-[400] md:py-6 md:px-0 md:text-sm	">
        Get your life insurance coverage easier and faster. We blend our
        expertise and technology to help you find the plan that’s right for you.
        Ensure you and your loved ones are protected.
      </p>
      <button className="font-karla py-2 px-8 mb-8 border border-solid border-white md:hover:bg-white md:hover:text-primary-700">
        {" "}
        View plans
      </button>
    </div>
  );
}

export default DarkCard;
