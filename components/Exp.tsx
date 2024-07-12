"use client"
import Image from 'next/image'
import React from 'react'
import { WobbleCard } from './ui/Wobble';
import AnimatedBoxes from './AnimatedBoxes';



const Exp = () => {
    return (
      <div className="py-20 lg:py-40">
      <div className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-20 lg:mb-40">
        <p>My Experiences</p>
      </div>
      <AnimatedBoxes boxClassName='box'>
      <div className="flex flex-col items-center justify-center gap-10">
        <WobbleCard
          containerClassName="w-full max-w-[1200px] h-full bg-darkblackish min-h-[400px] lg:min-h-[500px] box"
        >
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="p-5 w-full lg:w-1/2">
              <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Intern at CipherByte Technologies
              </h2>
              <p className="mt-4 text-left text-sm md:text-base text-neutral-200">
                At CipherByte Technologies, I have worked on FullStack TodoList and Weather projects using JavaScript, Next.js, Firebase, Aceternity UI, and Tailwind CSS, gaining valuable experience in software development.
              </p>
            </div>
            <div className="relative w-full lg:w-1/2 p-5">
              <Image
                src="/todomongit.png"
                width={1000}
                height={1000}
                alt="linear demo image"
                className="w-full h-auto grayscale filter rounded-2xl"
              />
            </div>
          </div>
        </WobbleCard>
    
        <WobbleCard
          containerClassName="w-full max-w-[1200px] h-full bg-darkblackish min-h-[400px] lg:min-h-[500px] box"
        >
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="relative w-full lg:w-1/2 p-5">
              <Image
                src="/vuegit.png"
                width={1000}
                height={1000}
                alt="linear demo image"
                className="w-full h-auto grayscale filter rounded-2xl"
              />
            </div>
            <div className="p-5 w-full lg:w-1/2">
              <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Freelancer
              </h2>
              <p className="mt-4 text-left text-sm md:text-base text-neutral-200">
                Focused on developing website form functionalities using HTML/CSS, JavaScript, Vue.js, and version control for Delhivery. Also served as a consultant for Delhivery, addressing client issues and acting as a Techno-Functional expert.
              </p>
            </div>
          </div>
        </WobbleCard>
      </div>
      </AnimatedBoxes>
    </div>
    
    
    )
}

export default Exp

  

      