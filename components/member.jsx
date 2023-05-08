import React from "react";

const MemberCard = props => {
    const { name, lastName, position, nmls, email, phone, instagram, imageSrc} = props
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-center">
            <div className="flex-shrink-0">
                <img className="object-cover member-pic" src={imageSrc} alt={`${name} ${lastName}`} />
            </div>
            <div className="info-block p-6">
                <h2 className="member-name text-xl sm:text-3xl font-bold text-cyan-300">{`${name} ${lastName}`}</h2>
                <h2 className="member-info1 text-xs sm:text-sm font-bold text-pink-400">{`${position} | NMSL:${nmls}`}</h2>
                <h2 className="member-info2 text-xs sm:text-2xl font-bold text-white">{`${email}`}</h2>
                <h2 className="member-info3 text-xs sm:text-2xl font-bold text-white">{`${phone}`}</h2>
                <h2 className="member-info4 text-xs sm:text-2xl font-bold text-white">{`${instagram}`}</h2>
            </div>
        </div>
    </div>
  );
};

export default MemberCard;