"use client"
import React, { useState } from 'react'
import { nav } from "@/utils/index"
import Image from 'next/image'
import { ContainerScroll } from './ui/Containerscroll'
import { WobbleCard } from './ui/Wobble'
import Spotlight from './ui/Spotlight'
import Texteffect from './ui/Texteffect'
import Link from 'next/link'

const Hero = () => {

  const [menu, Setmenu] = useState(false);

  const togglemenu = () => {
    Setmenu(!menu);
  }

  return (
    <div className='pb-20 ' id='hero'>
      <Spotlight
        className="-top-[800px] left-0 s:hidden lg:flex "
        fill="white"
      />
      <div>
        
      <div className=' s:flex-col'>
      <nav className='flex xs:flex-row sm:px-12 sm:pt-12 xs:p-5 s:p-8  '>
        <p className='md:text-2xl sm:text-lg s:text-xs items-center xs:mt-0 s:mt-2  w-full font-bold'>Kushagra Paliwal </p>
        <div className='flex flex-row list-none sm:gap-5  xs:gap-2 s:gap-1 lg:text-xl xs:flex sm:text-[12px] s:text-[10px] s:hidden '>
          {nav.map(navbar => (
            <Link href={navbar.link}>
              <li key={navbar.key}>{navbar.name}</li>
            </Link>
          ))}
        </div>

        <div>

          <button onClick={togglemenu} data-collapse-toggle="navbar-default" type="button" className="inline-flex mb-2 items-center p-2 ml-3 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg xs:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        </nav>
          
          <div className='xs:hidden s:flex w-full items-center justify-center -mt-5 '>
        {
          menu && (
            <div className=' w-[80%] rounded-lg p-5 bg-lightblackish xs:hidden s:flex '>
              <div className='flex flex-col w-full  xs:hidden s:flex list-none s:text-[10px] gap-2 pl-1 '>
                {nav.map(navbar => (
                  <Link href={navbar.link}>
                    <li key={navbar.key} className='w-full rounded p-2 hover:text-black hover:bg-white'>{navbar.name}</li>
                  </Link>
                ))}
              </div>
            </div>
          )
        }
        </div>
   </div>
   </div>


      <div className='flex flex-col text-center items-center md:-mt-[10px] sm:-mt-[100px] xs:-mt-[50px] s:-mt-[30px] '>
        <ContainerScroll
          titleComponent={
            <>
              <div className="text-4xl font-semibold text-white dark:text-white sm:leading-3 xs:leading-none s:leading-3 ">
                <div className='lg:text-4xl sm:text-xl xs:text-sm s:text-xs '>
                  Solving Real World Problems with
                </div>
                <br />
                <span className="flex justify-center text-center sm:mt-0 xs:-mt-10">
                  <Texteffect text='Interactive Designs' textclass='flex text-4xl sm:text-[3.5rem] s:text-[1.9rem] xs:text-[2.5rem] lg:text-[6rem] md:justify-center md:w-[600px] sm:w-[800px] sm:justify-center  lg:w-full font-bold mt-1 leading-none' />
                </span>
              </div>
            </>
          }
        >
          <Image
            src={`/github.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-2 ">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-darkblackish min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              As an Enthusiast Developer with Cutting-Edge Best Solutions
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Explore the forefront of my innovation with my Approach of Development.
            </p>
          </div>
          <Image
            src="/show1.png"
            width={400}
            height={400}
            alt="linear demo image"
            className="absolute right-2 lg:-right-[25%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pinkish">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Efficiency and Precision at Every Step
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Optimized my development process with seamless integration and robust performance.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-darkblackish min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Transforming my Projects with Latest Technologies to Achieve the Best
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Join Me for the forward-thinking driving technological advancement.
            </p>
          </div>
          <Image
            src="/show2.png"
            width={400}
            height={400}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[15%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  )
}

export default Hero
