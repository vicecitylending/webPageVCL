import React from "react";

const MemberCard = props => {
    const { name, lastName, position, nmls, email, phone, instagram, imageSrc} = props
  return (
    <div>
        <div className="flex md:flex-row flex-col items-center justify-center">
            <div className="basis 1/4"></div>
            <div className="flex basis-1/4 items-center justify-center">
                <img className="scale-50 sm:scale-90 -translate-y-8" src={imageSrc} alt={`${name} ${lastName}`} />
            </div>
            <div className="sm:mb-0 -mb-20 flex basis-1/4 items-center justify-center sm:-translate-y-11 -translate-y-32">
                <div className=" flex-col items-center justify-center">
                    <div className="basis-1/6 text-xl sm:text-3xl font-bold text-cyan-300">{`${name} ${lastName}`}</div>
                    <div className="basis-1/6 text-xs sm:text-sm font-bold text-white">{`${position}`}</div>
                    <div className="basis-1/6 text-xs sm:text-sm font-bold text-white">{`NMLS:${nmls}`}</div>
                    <div className="basis-1/6 text-xs sm:text-2xl font-bold text-white">{`${email}`}</div>
                    <div className="basis-1/6 text-xs sm:text-2xl font-bold text-white">{`${phone}`}</div>
                    <div className="basis-1/6 text-xs sm:text-2xl font-bold text-white">{`${instagram}`}</div>
                </div>
            </div>
            <div className="basis 1/4"></div>
        </div>
    </div>
  );
};

export default MemberCard;