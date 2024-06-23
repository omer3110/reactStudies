import React from "react";
import CircleWithIcon from "./CircleWithIcon";

function MiniWhiteCard({ icon, heading, p }) {
  return (
    <div className=" text-center pb-4 md:text-left">
      <CircleWithIcon icon={icon} />
      <h3 className=" font-dm-serif text-2xl pt-8 pb-4 font-normal">
        {heading}
      </h3>
      <p className=" text-sm px-4 text-base-500 font-normal md:p-0">{p}</p>
    </div>
  );
}

export default MiniWhiteCard;
