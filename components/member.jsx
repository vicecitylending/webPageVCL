import React from "react";

const MemberCard = props => {
    const { name, lastName, imageSrc} = props
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-row">
        <div className="flex-shrink-0">
          <img className="h-48 w-48 object-cover" src={imageSrc} alt={`${name} ${lastName}`} />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{`${name} ${lastName}`}</h2>
          <p className="text-white text-base mt-4">
            Aquí va la información personal del empleado
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;