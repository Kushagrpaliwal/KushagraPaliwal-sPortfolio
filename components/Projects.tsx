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
            <div className='text-center lg:text-5xl sm:text-5xl md:text-5xl lg:w-full lg:p-0 md:p-4 font-bold mb-40'>Check Out Some Of My Projects</div>
            <AnimatedBoxes boxClassName='box'>
                <div className='flex flex-col items-center text-center'>

                    <div className='flex xl:flex-row sm:flex-col  sm:items-center mt-10 '>
                        <p className='font-bold text-[50px] sm:flex xl:hidden  md:w-[800px] sm:w-[600px] box '>Todomon A Multifunctional Todolist </p>
                        <div>
                            <Image src="/p1.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:hidden sm:flex sm:mt-20 xl:mt-0 rounded-2xl box' />
                        </div>
                        <div className='flex text-left flex-col sm:w-[800px] 2xl:w-[800px] xl:w-[600px]  items-center xl:mr-10 mt-20 '>
                            <p className='font-bold text-[50px] xl:flex sm:hidden 2xl:w-[800px] sm:w-[800px] xl:w-[600px] box '>Todomon A Multifunctional Todolist </p>
                            <div className='mt-2 font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px] 2xl:pr-20  box'>Todomon is a note-making app designed for adding and deleting items, similar to a shopping list.
                                It is built with HTML/CSS, JavaScript, React , Tailwind css , Firebase .
                                Users can create and edit notes using a rich text editor, and organize their notes by
                                adding titles and categories.
                                The app features a responsive design for a seamless experience across various devices, and a user-friendly interface with intuitive controls.</div>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px] flex flex-row justify-between mb-10'>
                                <div className='flex justify-start'>
                                    <button className="box px-4 my-10 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                        <Link href={'https://todomon-one.vercel.app/'} target='_blank' >Check Live</Link>
                                    </button>
                                </div>
                                <div className='flex justify-end items-center box xl:pr-20'>
                                    <AnimatedTooltip items={todomon} />
                                </div>
                            </div>

                        </div>
                        <div>
                            <Image src="/p1.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:flex sm:hidden  rounded-2xl box' />
                        </div>
                    </div>

                    <div className='flex xl:flex-row sm:flex-col  sm:items-center mt-40 '>
                        <p className='font-bold text-[50px] sm:flex xl:hidden  md:w-[800px] sm:w-[600px] md:w-[450px] box '>Apple Iphone PR UI/UX Website </p>
                        <div>
                            <Image src="/p2.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:hidden sm:flex sm:mt-20 xl:mt-0 rounded-2xl box' />
                        </div>
                        <div className='flex text-left flex-col sm:w-[800px] 2xl:w-[800px] xl:w-[600px]  items-center xl:mr-10 mt-20 '>
                            <p className='font-bold text-[50px] xl:flex sm:hidden 2xl:w-[800px] sm:w-[800px] xl:w-[600px] box '>Apple Iphone PR UI/UX Website </p>
                            <div className='mt-2 font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px] 2xl:pr-20  box'>It's a meticulously crafted apple iphone website that aims to capture the magic of popular apple website while adding my unique touch.
                                HTML, CSS, JavaScript, React with Tailwind css is used to create this project .
                                Conducted thorough testing and debugging to deliver a high-quality, responsive application. Enhanced problem-solving and coding skills.</div>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px] flex flex-row justify-between mb-10'>
                                <div className='flex justify-start'>
                                    <button className="box px-4 my-10 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                        <Link href={'https://apple-website-topaz.vercel.app/'} target='_blank' >Check Live</Link>
                                    </button>
                                </div>
                                <div className='flex justify-end items-center box xl:pr-20'>
                                    <AnimatedTooltip items={apple} />
                                </div>
                            </div>

                        </div>
                        <div>
                            <Image src="/p2.png" width={500} height={500} alt='p1img' className='bg-gray-300  xl:flex sm:hidden  rounded-2xl box' />
                        </div>
                    </div>


                    <div className='flex xl:flex-row sm:flex-col sm:items-center mt-40 box'>
                    <p className='font-bold text-[50px] sm:flex xl:hidden  md:w-[800px] sm:w-[500px] md:w-[450px] box '>Hilink Traveling Guide </p>
                        <div>
                            <Image src="/p3.png" width={500} height={500} alt='p1img' className='bg-gray-300 sm:mt-20 xl:mt-0  rounded-2xl box' />
                        </div>
                        <div className='flex text-right flex-col items-center mr-10 mt-20 '>
                            <p className='font-bold text-[50px] xl:block sm:hidden 2xl:w-[800px] sm:w-[800px] xl:w-[600px] box '>Hilink Traveling Guide </p>
                            <p className='mt-2 font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px] xl:pl-20  box'> Hilink Traveling Guide is your essential companion for seamless journeys. Discover destinations, plan trips effortlessly, and access curated local insights. With intuitive navigation and real-time updates, it's your passport to enriched travel experiences.</p>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px] flex flex-row justify-between mb-10'>
                                <div className='flex justify-end items-center box xl:pl-20'>
                                    <AnimatedTooltip items={travel} />
                                </div>
                                <div className='flex flex-grow justify-end items-center '>
                                    <button className="box px-4 my-10 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                                        <Link href={'https://travel-website-one-alpha.vercel.app/'} target='_blank'>Check Live</Link>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='flex xl:flex-row sm:flex-col sm:items-center mt-40 box'>
                    <p className='font-bold text-[50px] sm:flex xl:hidden  md:w-[800px] sm:w-[500px] md:w-[450px] box '>Weathermon a Variety Weather Forecast Webapp  </p>
                        <div>
                            <Image src="/p4.png" width={500} height={500} alt='p1img' className='bg-gray-300 sm:mt-20 xl:mt-0  rounded-2xl box' />
                        </div>
                        <div className='flex text-right flex-col items-center mr-10 mt-20 '>
                            <p className='font-bold text-[50px] xl:block sm:hidden 2xl:w-[800px] sm:w-[800px] xl:w-[600px] box '>Weathermon a Variety Weather Forecast Webapp  </p>
                            <p className='mt-2 font-light 2xl:w-[800px] xl:w-[600px] sm:w-[500px] xl:pl-20  box'>  Weathermon is a versatile web application providing detailed weather forecasts tailored to your location. With sleek design and intuitive interface, it delivers up-to-date weather conditions, hourly and daily forecasts, and interactive maps. Stay informed with real-time updates on temperature, humidity, and precipitation trends, making planning effortless.</p>
                            <div className='2xl:w-[800px] xl:w-[600px]  sm:w-[500px] flex flex-row justify-between mb-10'>
                                <div className='flex justify-end items-center box xl:pl-20'>
                                    <AnimatedTooltip items={weathermon} />
                                </div>
                                <div className='flex flex-grow justify-end items-center '>
                                    <button className="box px-4 my-10 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
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