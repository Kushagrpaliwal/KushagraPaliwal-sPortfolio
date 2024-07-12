"use client";
import React, { useEffect } from 'react';
import Skillscomp from './Skillscomp';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import {skills} from '../utils/index';


gsap.registerPlugin(Draggable);

const Skills = () => {

    useGSAP(() => {
        Draggable.create("#draggableElement", {
            bounds: "#Container",
            inertia: true,
            onClick: function () {
                console.log("clicked");
            },
            onDragEnd: function () {
                console.log("drag ended");
            },
        });
    }, []);

    return (
        <div className='py-20 mb-20 flex justify-center items-center' id='Container'>
        <div className='flex flex-col w-full max-w-6xl'>
          <div className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 lg:mb-20 '>
            <p>My Skills</p>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-6 sm:mt-20'>
            {skills.map((skill) => (
              <Skillscomp key={skill.name} text={skill.name} img={skill.image} MainId={'draggableElement'} />
            ))}
          </div>
        </div>
      </div>
      
    );
}

export default Skills;
