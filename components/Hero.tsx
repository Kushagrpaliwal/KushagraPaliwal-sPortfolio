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


  return (
    <div className='pb-20 ' id='hero'>
      <Spotlight
        className="-top-[800px] left-0 sm:hidden lg:flex "
        fill="white"
      />
      <nav className='flex flex-row p-12 '>
        <p className='md:text-2xl w-full font-bold'>Kushagra Paliwal </p>
        <div className='flex flex-row list-none gap-5 lg:text-xl lg:flex sm:text-[12px] '>
          {nav.map(navbar => (
            <Link href={navbar.link}>
              <li key={navbar.key}>{navbar.name}</li>
            </Link>
          ))}
        </div>

      </nav>

      
      <div className='flex flex-col text-center items-center md:-mt-[10px] sm:-mt-[100px] '>
        <ContainerScroll
          titleComponent={
            <>
              <div className="text-4xl font-semibold text-white dark:text-white leading-3">
                <div className='lg:text-4xl sm:text-xl'>
                Solving Real World Problems with
                </div>
                 <br />
                <span className="flex justify-center text-center">
                  <Texteffect text='Interactive Designs' textclass='flex text-4xl sm:text-[3.5rem] lg:text-[6rem] md:justify-center md:w-[600px] sm:w-[800px] sm:justify-center  lg:w-full font-bold mt-1 leading-none' />
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



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
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