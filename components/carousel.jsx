import { Carousel } from "@material-tailwind/react";
import MemberCard from "./member";

 
const MembersCarousel = props => {
    const { members } = props

    const member1 = members[0].data
    const member2 = members[1].data

  return (
    <Carousel className="rounded-xl">
        <MemberCard
            name={member1.name}
            lastName={member1.surname}
            imageSrc={member1.photo.url}
        />
     <MemberCard
            name={member2.name}
            lastName={member2.surname}
            imageSrc={member2.photo.url}
        />
      {/* <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      /> */}
    </Carousel>
  );
};

export default MembersCarousel;