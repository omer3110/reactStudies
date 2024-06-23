import React from "react";

function AdditionalLinks({ header, links }) {
  return (
    <div className="font-medium  text-center md:text-left">
      <h2 className="mb-4 text-base-500 uppercase p-4 md:pl-0">{header}</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2 text-base-700 ">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default AdditionalLinks;
