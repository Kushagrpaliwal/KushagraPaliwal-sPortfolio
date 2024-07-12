"use client"
// components/Texteffect.tsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TexteffectProps {
  text: string;
  textclass?: string;
}

const Texteffect: React.FC<TexteffectProps> = ({ text, textclass }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      let newText = '';
      text.split('').forEach((char) => {
        newText += `<div>${char === ' ' ? '&nbsp;' : char}</div>`;
      });
      textRef.current.innerHTML = newText;

      // Select all divs inside textRef.current and animate them
      gsap.fromTo(textRef.current.children, {
        opacity: 0,
        y: 90,
      }, {
        duration: 2,
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: "elastic(1.2, 0.5)",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%", // start when the top of the element reaches 70% down from the top of the viewport
          toggleActions: "restart none none reverse",
        },
      });
    }
  }, [text]);

  return (
    <div ref={textRef} className={`text-xl flex flex-wrap  ${textclass}`}>
      {/* Placeholder for the animated text */}
    </div>
  );
};

export default Texteffect;
