import Image from "next/image";

import Vlc from "public/images/courses/vlc.png";
import Book from "public/images/courses/book.png";
import Pencils from "public/images/courses/Pencils.png";

const FeaturesSection = () => {
  return (
    <section className="w-full flex-start-start !justify-center gap-16 min-h-[800px]">
      <Box
        image={Book}
        title="Untitled"
        description="Description regarding the title tesst ts tesst ts Description regarding the title Description regarding the titlea tesst ts "
      />
      <div className="centering flex-col">
        <h4 className="font-semibold text-3xl border-b-[6px] border-b-mainBlue pb-3 mb-3">Features</h4>
        <p className="text-gray-4 mb-16">Description regarding the title</p>
        <Box
          image={Pencils}
          title="Untitled"
          description="Description regarding the title tesst ts tesst ts Description regarding the title Description regarding the titlea tesst ts "
        />
      </div>
      <Box
        image={Vlc}
        title="Untitled"
        description="Description regarding the title tesst ts tesst ts Description regarding the title Description regarding the titlea tesst ts "
      />
    </section>
  );
};

export default FeaturesSection;

const Box = ({ title, description, image }) => {
  return (
    <div className="centering flex-col bg-white rounded-md w-[23rem] shadow p-10">
      <Image src={image} alt={title} width="200" height="200" />
      <h5 className="font-medium text-2xl mb-5">{title}</h5>
      <p className="text-gray-4 text-base">{description}</p>
    </div>
  );
};
