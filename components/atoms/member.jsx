import React from "react";
import Image from 'next/image'


const MemberCard = props => {
    const { name, lastName, position, nmls, phone, instagram, imageSrc} = props
  return (
    <div className="h-full">
        <div className="flex md:flex-row flex-col items-center justify-center h-full">
            <div className="flex basis-1/4 items-center justify-center">
                <Image  className="md:scale-75 sm:scale-50 scale-50 xl:scale-90 -translate-y-8 transition duration-500 object-cover"
                            src={imageSrc}
                            alt={`${name} ${lastName}`} 
                            width={700}
                            height={700}
                    />
            </div>
            <div className="sm:mb-0 -mb-20 flex basis-1/4 items-center justify-center sm:-translate-y-11 -translate-y-32">
                <div className=" flex-col items-center justify-center h-full w-full">
                    <div className="basis-1/6 text-xl lg:text-base xl:text-lg md:text-xs sm:text-3xl text-cyan-300">{`${name} ${lastName}`}</div>
                    <div className="basis-1/6 text-xs lg:text-base xl:text-lg md:text-xs sm:text-lg text-white">{`${position}`}</div>
                    <div className="basis-1/6 text-xs lg:text-base xl:text-lg md:text-xs sm:text-lg text-white">{`NMLS:${nmls}`}</div>
                    <div className="basis-1/6 text-xs lg:text-base xl:text-lg md:text-xs sm:text-lg text-white hover:scale-110 transition duration-500 cursor-pointer object-cover">
                        <a href={`tel:+1${phone}`}>{phone}</a>
                    </div>
                    <div className="basis-1/6 text-xs lg:text-base xl:text-lg md:text-xs sm:text-lg text-white hover:scale-110 transition duration-500 cursor-pointer object-cover">
                        <a href={`https://www.instagram.com/${instagram}/`}>@{instagram}</a>
                    </div>
                </div>
            </div>
            <div className="basis 1/4"></div>
        </div>
    </div>
  );
};

export default MemberCard;