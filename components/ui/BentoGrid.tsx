'use client'

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { listOne, listTwo, listThree } from "@/data";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const handleCallBooking = () => {
    try {
      const element = document.getElementById('book-a-call');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      console.error('Failed to scroll: ', err);
    }
  }

  return (
    <div
      id={id.toString()}
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 5 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <picture><img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')}/></picture>
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 6 && 'w-full opacity-80'}`}>
          {spareImg && (
            <picture><img src={spareImg} alt={spareImg} className="object-cover, object-center w-full h-full" /></picture>
          )}
        </div>
        {id === 5 && (
          <BackgroundGradientAnimation />
        )}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10', `${id === 3 && 'justify-start py-5 lg:py-10'}`)}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {id === 2 && (
            <GlobeDemo />
          )}
          {id === 3 && (
            <div className="flex flex-row md:flex-col gap-1 lg:gap-3 w-fit absolute -right-3 md:-right-2 md:bottom-40">
              <div className="flex flex-col md:flex-row gap-1 lg:gap-3">
                <span className="py-4 px-3 md:w-10 rounded-md md:rounded-lg text-center bg-[#10132E]" />
                {listOne.map((item, idx) => (
                  <span key={idx} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col md:flex-row gap-1 lg:gap-3">
                {listTwo.map((item, idx) => (
                  <span key={idx} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-md md:rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 md:w-14 rounded-md md:rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col md:flex-row gap-1 lg:gap-3">
                <span className="py-4 px-3 md:w-12 rounded-md md:rounded-lg text-center bg-[#10132E]" />
                {listThree.map((item, idx) => (
                  <span key={idx} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="mt-5 relative">
              <MagicButton
                title="Book a call"
                position="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleCallBooking}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
