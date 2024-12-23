import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
      <div className="h-[764px] bg-[#F2F0FF] flex">
        <div className="top-[122px] right-[70px]">
          <Image
            src={"/images/image 32.png"}
            height={387}
            width={387}
            alt="image"
            className="top-[122px] right-[70px]"
          ></Image>
        </div>
        <div className="absolute top-[375px] left-[325px] w-[644px] h-[248px]">
          <h1 className="text-[#FB2E86] font-[16px]">
            Best Furniture For Your Castle....
          </h1>
          <h1 className="text-[53px]">
            New Furniture Collection <br /> Trends In 2024
          </h1>
          <p className="text-[16px] mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad <br />
            accusamus ut sed similique?
          </p>
          <Button
            variant="outline"
            className="bg-[#FB2E86] text-white w-[163px] h-[50px]"
          >
            Button
          </Button>
        </div>
        <div className="relative w-full h-full ">
          <Image
            src="/images/Group 129.png"
            alt="Background"
            width={645}
            height={689}
            className="absolute top-[100px] right-[70px] pr-3"
          />
          <Image
            src="/images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
            alt="Overlay"
            width={629}
            height={629}
            className="absolute top-[110px] right-[100px]"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
