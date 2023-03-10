import Image from "next/image";

// keyboard icon
import KeyboardIcon from "public/icons/Finger/KeyboardIcon";

const GuideSections = () => {
  return (
    <section className="centering flex-col gap-12 rounded-2xl max-w-full w-full [&>*]:w-full bg-gray-1 mt-[130px] md:mt-[170px] mb-[70px] md:mb-[100px] px-2 2xs:px-4 sm:px-8 py-6 2xs:py-10 sm:py-14">
      <TextSection />
      <DotsSection />
      <KeyboardImageSection />
    </section>
  );
};

export default GuideSections;

const TextSection = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl 3xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-2">
        10-finger typing guide
      </h2>
      <p className="text-base text-gray-3 text-center mb-7">how to place your fingers on the keys of the key board</p>
      <p className="text-base 2xs:text-lg 3xs:text-xl sm:text-2xl text-center">Try to remember the locations of the buttons</p>
    </div>
  );
};

const DotsSection = () => {
  return (
    <div className="centering gap-2">
      {new Array(4).fill("").map((item, index) => (
        <span key={index} className={`bg-orange-400 h-2 sm:h-3 rounded-full ${index ? "w-2 sm:w-3" : "w-12"}`}></span>
      ))}
    </div>
  );
};

const KeyboardImageSection = () => {
  return (
    <div className="relative">
      <div className="max-w-full w-full [&>*]:w-full">
        <KeyboardIcon />
      </div>
      <Image
        src="/icons/Finger/FingerLeft.png"
        alt=""
        width="400"
        height="400"
        className="absolute left-[10%] top-[calc(50%_-_20px)] max-w-[40%]"
      />
      <Image
        src="/icons/Finger/FingerRight.png"
        alt=""
        width="400"
        height="400"
        className="absolute right-[10%] top-[calc(50%_-_20px)] max-w-[40%]"
      />
    </div>
  );
};
