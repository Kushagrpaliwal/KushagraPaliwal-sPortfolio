import Image from 'next/image';
import React from 'react';

type SkillsCompProps = {
  text: string;
  img: string;
  ClassName?:String;
  textclass?:String;
  imageclass?:String;
  MainId?:String;
}

const Skillscomp: React.FC<SkillsCompProps> = ({ MainId ,text, img , ClassName , textclass , imageclass }) => {
  return (
<div id={`${MainId}`} className="flex justify-center items-center">
  <div className={`flex flex-row items-center justify-center bg-white text-black rounded-xl h-[55px] px-5 py-2 font-light text-center border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md ${ClassName}`}>
    <div className="flex-shrink-0"> 
      <Image src={img} height={30} width={30} alt="skillsimg" className={`${imageclass}`} />
    </div>
    <div className={`flex items-center text-[16px] md:text-[20px] font-light ml-2 ${textclass}`}>
      {text}
    </div>
  </div>
</div>

  );
}

export default Skillscomp;
