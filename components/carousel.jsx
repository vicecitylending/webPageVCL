import { Carousel } from "@material-tailwind/react";
import MemberCard from "./member";

 
const MembersCarousel = props => {
    const { members } = props

    const member1 = members[0].data
    const member2 = members[1].data

  return (
    <Carousel className="rounded-xl" style={{ height: "350px"}}>
        <MemberCard
            name={member1.name}
            lastName={member1.surname}
            position={member1.position}
            nmls={member1.nmls}
            email={member1.email}
            phone={member1.phone}
            instagram={member1.instagram}
            imageSrc={member1.photo.url}
        />
     <MemberCard
            name={member2.name}
            lastName={member2.surname}
            position={member2.position}
            nmls={member2.nmls}
            email={member2.email}
            phone={member2.phone}
            instagram={member2.instagram}
            imageSrc={member2.photo.url}
        />
    </Carousel>
  );
};

export default MembersCarousel;