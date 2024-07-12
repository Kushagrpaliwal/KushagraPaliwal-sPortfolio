"use effect"
import Image from 'next/image'
import React from 'react'
import { Meteors } from './ui/Meteor'
import Texteffect from './ui/Texteffect'
import Link from 'next/link'


const About = () => {
    return (

        <div className='py-10' id='about'>
            <div className='text-center text-5xl font-bold mb-20'>
                <p>About Me</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>

                <Meteors />

                <div className="">
                    <Texteffect text='Hello! My name is Kushagra Paliwal, a passionate software developer from Agra, Uttar Pradesh, India. With a robust foundation in web development . I specialize in creating , engaging and user-friendly digital experiences. I am good at developing responsive UI/UX designs that seamlessly transform ideas into functional and aesthetically pleasing solutions.' textclass=' lg:text-[2rem]  font-bold mt-1 mb-20 xl:w-[1200px] md:w-[700px] sm:w-[600px] lg:w-[900px] justify-center text-center leading-none gap-1' />
                </div>
                <div>
                    <Image src="moon.svg" width={800} height={800} alt='aboutimg' className='w-full ' />
                </div>
                <button className="px-4 my-10 py-2 mt-20  font-extrabold rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                    <Link href={'mailto:paliwakushagra07@gmail.com'} target='_blank'>
                        Connect With Me
                    </Link>
                </button>
                <div className='flex flex-row gap-10 mt-10'>

                    <div className='flex justify-center w-[50px] h-[50px] rounded-full bg-white'>
                        <Link href={'https://github.com/Kushagrpaliwal'} target='_blank'>
                            <Image src="/git.png" width={50} height={50} alt='socialsimg' />
                        </Link>
                    </div>
                    <div className='flex justify-center w-[50px] h-[50px] rounded-full bg-white p-1'>
                        <Link href={'https://www.linkedin.com/in/kushagra-paliwal/'} target='_blank'>
                            <Image src="/linked.png" width={50} height={50} alt='socialsimg' />
                        </Link>
                    </div>
                    <div className='flex justify-center w-[50px] h-[50px] rounded-full bg-white p-1'>
                        <Link href={'https://wa.me/918433446586'} target='_blank'>
                            <Image src="/whatsapp.png" width={60} height={60} alt='socialsimg' />
                        </Link>
                    </div>
                    <div className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white'>
                        <Link href={'https://www.instagram.com/kushagr_paliwal/?hl=en'} target='_blank'>
                            <Image src="/instagram.png" width={45} height={45} alt='socialsimg' />
                        </Link>
                    </div>
                </div>
                <p className='mt-10'>All Right Reserved 2024</p>
            </div>
        </div>


    )
}

export default About