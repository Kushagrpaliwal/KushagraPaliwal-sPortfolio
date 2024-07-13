"use client"
import Image from 'next/image'
import React from 'react'
import AnimatedBoxes from './AnimatedBoxes'
import { AnimatedTooltip } from './ui/Animatedtooltip'
import { todomon, apple, travel, weathermon } from '../utils/index'
import Link from 'next/link'

const Projects = () => {


    return (
        <div className='pb-12 pt-20'>
            <div className='text-center lg:text-5xl sm:text-5xl s:text-4xl  lg:w-full lg:p-0 md:p-4 font-bold mb-40'>Check Out Some Of My Projects</div>
            <AnimatedBoxes boxClassName='box'>
                <div className='flex flex-col items-center text-center'>

                    <div className='flex xl:flex-row s:flex-col  sm:items-center mt-10 '>
                        <p className='font-bold sm:text-[50px] s:text-[35px] sm:mb-0 s:mb-10 sm:flex xl:hidden  md:w-[800px] sm:w-[600px] box '>Todomon A Multifunctional Todolist </p>
                        <div className='flex justify-center '>
                            <Image src="/p1.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:hidden sm:flex sm:mt-20 xl:mt-0  s:w-[90%] rounded-2xl box' />
                        </div>
                        <div className='flex text-left flex-col sm:w-[800px] 2xl:w-[800px] xl:w-[600px]  items-center xl:mr-10 sm:mt-20 xs:mt-10 '>
                            <p className='font-bold text-[50px] xl:flex s:hidden 2xl:w-[800px] sm:w-[800px] xs:w-[500px] xl:w-[600px] box '>Todomon A Multifunctional Todolist </p>
                            <div className='xs:mt-0 s:mt-5  font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px] s:w-[80%] 2xl:pr-20  box'>Todomon is a note-making app designed for adding and deleting items, similar to a shopping list.
                                It is built with HTML/CSS, JavaScript, React , Tailwind css , Firebase .
                                Users can create and edit notes using a rich text editor, and organize their notes by
                                adding titles and categories.
                                The app features a responsive design for a seamless experience across various devices, and a user-friendly interface with intuitive controls.</div>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px] flex xs:flex-row s:flex-col justify-between xs:mb-10 s:mb-0'>
                            <div className='flex items-center box xs:hidden s:flex mt-2 pr-4'>
                                    <AnimatedTooltip items={todomon} />
                                </div>
                                <div className='flex justify-start '>
                                    <button className="box px-4 my-10 s:w-full py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                        <Link href={'https://todomon-one.vercel.app/'} target='_blank' >Check Live</Link>
                                    </button>
                                </div>
                                <div className='flex justify-end items-center xs:flex s:hidden box xl:pr-20'>
                                    <AnimatedTooltip items={todomon} />
                                </div>
                            </div>

                        </div>
                        <div>
                            <Image src="/p1.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:flex s:hidden  rounded-2xl box' />
                        </div>
                    </div>

                    <div className='flex xl:flex-row s:flex-col  sm:items-center mt-40 '>
                        <p className='font-bold sm:text-[50px] sm:flex xl:hidden  md:w-[700px]  s:mb-10 sm:mb-0  sm:w-[600px] s:text-[35px]  box '>Apple Iphone PR UI/UX Website </p>
                        <div className='flex justify-center sm:mt-0 xs:mt-10'>
                            <Image src="/p2.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:hidden sm:flex sm:mt-20 xl:mt-0 s:w-[90%] sm:w-full  rounded-2xl box' />
                        </div>
                        <div className='flex text-left flex-col sm:w-[800px] 2xl:w-[800px] xl:w-[600px]  items-center xl:mr-10 sm:mt-20 xs:mt-10 '>
                            <p className='font-bold text-[50px] xl:flex s:hidden 2xl:w-[800px] sm:w-[800px] xl:w-[600px] box '>Apple Iphone PR UI/UX Website </p>
                            <div className='xs:mt-2 s:mt-5 font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px] s:w-[80%] 2xl:pr-20  box'>It's a meticulously crafted apple iphone website that aims to capture the magic of popular apple website while adding my unique touch.
                                HTML, CSS, JavaScript, React with Tailwind css is used to create this project .
                                Conducted thorough testing and debugging to deliver a high-quality, responsive application. Enhanced problem-solving and coding skills.</div>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px] flex xs:flex-row s:flex-col justify-between xs:mb-10 s:mb-0'>
                            <div className='flex xs:hidden s:flex justify-end items-center box mt-2 pr-4'>
                                    <AnimatedTooltip items={apple} />
                                </div>
                                <div className='flex justify-start'>
                                    <button className="box px-4 my-10 py-2 s:w-full rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                        <Link href={'https://apple-website-topaz.vercel.app/'} target='_blank' >Check Live</Link>
                                    </button>
                                </div>
                                <div className='flex xs:flex s:hidden justify-end items-center box xl:pr-20'>
                                    <AnimatedTooltip items={apple} />
                                </div>
                            </div>

                        </div>
                        <div>
                            <Image src="/p2.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:flex s:hidden  rounded-2xl box' />
                        </div>
                    </div>


                    <div className='flex xl:flex-row s:flex-col  sm:items-center mt-40 box'>
                        <p className='font-bold sm:text-[50px] sm:flex xl:hidden  md:w-[500px] sm:w-[500px] s:text-[35px] sm:mb-10 s:mb-10  box '>Hilink Traveling Guide </p>
                        <div className='flex justify-center'>
                            <Image src="/p3.png" width={500} height={500} alt='p1img' className='bg-gray-300 sm:mt-20 xl:mt-0 xs:w-[70%] s:w-[90%] sm:w-full  rounded-2xl box' />
                        </div>
                        <div className='flex text-right  flex-col sm:w-[800px]  2xl:w-[800px] xl:w-[600px] justify-center items-center xl:mr-10 sm:mt-20 xs:mt-10'>
                            <p className='font-bold text-[50px] xl:block s:hidden 2xl:w-[800px] sm:w-[800px] xl:w-[600px] box '>Hilink Traveling Guide </p>
                            <p className='xs:mt-2 s:mt-5 font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px]  s:w-[80%] xl:pl-20 sm:pl-0 sm:pl-[50px]  box'> Hilink Traveling Guide is your essential companion for seamless journeys. Discover destinations, plan trips effortlessly, and access curated local insights. With intuitive navigation and real-time updates, it's your passport to enriched travel experiences.</p>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px] s:w-[80%]  flex xs:flex-row s:flex-col justify-between mb-10'>
                                <div className='flex xs:justify-end items-center box xl:pl-20 sm:pl-0 xs:pr-10 s:justify-center xs:mt-0 s:mt-5  '>
                                    <AnimatedTooltip items={travel} />
                                </div>
                                <div className='flex flex-grow justify-end items-center xs:px-0 s:px-5 '>
                                    <button className="box px-4 my-10 py-2 s:w-full xs:w-auto  rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                        <Link href={'https://travel-website-one-alpha.vercel.app/'} target='_blank'>Check Live</Link>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='flex xl:flex-row s:flex-col xs:items-center  mt-40 box'>
                        <p className='font-bold sm:text-[50px] sm:flex xl:hidden  md:w-[500px] sm:w-[500px] s:text-[35px] sm:mb-10 s:mb-10  box '>Weathermon a Variety Weather Forecast Webapp  </p>
                        <div className='flex justify-center'>
                            <Image src="/p4.png" width={500} height={500} alt='p1img' className='bg-gray-300 sm:mt-20 xl:mt-0 xs:w-[70%] s:w-[90%] sm:w-full  rounded-2xl box' />
                        </div>
                        <div className='flex text-right flex-col sm:w-[800px] 2xl:w-[800px] xl:w-[600px]  items-center justify-center xl:mr-10  sm:mt-20 xs:w-full xs:mt-10'>
                            <p className='font-bold text-[50px] xl:block s:hidden 2xl:w-[800px] sm:w-[800px] xl:w-[600px] box '>Weathermon a Variety Weather Forecast Webapp  </p>
                            <p className='xs:mt-2 s:mt-5 font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px] s:w-[80%] xl:pl-20  box'>  Weathermon is a versatile web application providing detailed weather forecasts tailored to your location. With sleek design and intuitive interface, it delivers up-to-date weather conditions, hourly and daily forecasts, and interactive maps. Stay informed with real-time updates on temperature, humidity, and precipitation trends, making planning effortless.</p>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px]  flex xs:flex-row s:flex-col justify-between mb-10'>
                                <div className='flex xs:justify-end items-center box xl:pl-20 sm:pl-0 sm:pr-10 xs:pr-8  s:justify-center xs:mt-0 s:mt-5'>
                                    <AnimatedTooltip items={weathermon} />
                                </div>
                                <div className='flex flex-grow justify-end items-center '>
                                    <button className="box px-4 my-10 py-2 s:w-full xs:w-auto rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                        <Link href={'https://github.com/Kushagrpaliwal/Weathermon'} target='_blank'>Check Live</Link>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </AnimatedBoxes>
        </div>
    )
}

export default Projects