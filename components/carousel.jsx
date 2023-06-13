import { Carousel } from "@material-tailwind/react";
import MemberCard from "./atoms/member";

const MembersCarousel = (props) => {
  const { members } = props;

  const renderMembers = () => {
    return members.map((member, index) => (
      <MemberCard
        className="no-shadow"
        key={index}
        name={member.data.name}
        lastName={member.data.surname}
        position={member.data.position}
        nmls={member.data.nmls}
        email={member.data.email}
        phone={member.data.phone}
        instagram={member.data.instagram}
        imageSrc={member.data.photo.url}
      />
    ));
  };

  return (
    <Carousel
      className="rounded-xl"
      autoplay={true} // activar el autoplay
      // autoplayHoverPause={false} // continuar el autoplay aunque el mouse esté encima
      loop={true} // hacer el carrusel infinito
      animation="slide" // elegir la animación de slide
    >
      {renderMembers()}
    </Carousel>
  );
};

export default MembersCarousel;