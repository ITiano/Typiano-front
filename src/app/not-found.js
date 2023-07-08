"use client";
import Image from "next/image";
import routes from "@routes/routes";
import CustomBtn from "@components/utils/CustomBtn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => push(routes.home.path), 1000);
  }, [push]);

  return (
    <div className="min-h-[100svh] centering flex-col gap-4 lg:flex-row lg:gap-16">
      <Image width={180} height={180} src="/images/public/404.png" alt="" />
      <div className="centering lg:justify-start lg:items-start flex-col gap-2">
        <p className="text-3xl lg:text-5xl font-bold">Error!</p>
        <p className="text-gray-3 lg:text-lg my-1 lg:text-center">Somethings went wrang please try again later</p>
        <CustomBtn text="Retry" className="!px-0" arrowEndBtn onClick={() => push(routes.home.path)} />
      </div>
    </div>
  );
};

export default NotFound;