import { useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedBoxesProps {
  children: ReactNode;
  boxClassName?: string;
}

const AnimatedBoxes: React.FC<AnimatedBoxesProps> = ({ children, boxClassName }) => {
  useEffect(() => {
    if (!boxClassName) {
      console.error('boxClassName is required');
      return;
    }

    gsap.defaults({ ease: "power1.inOut" });
    gsap.set(`.${boxClassName}`, { y: 100 });

    const onEnter = (batch: Element[]): void => {
      gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15, grid: [1, 3] }, overwrite: true });
    };

    const onLeave = (batch: Element[]): void => {
      gsap.set(batch, { opacity: 0, y: -100, overwrite: true });
    };

    const onEnterBack = (batch: Element[]): void => {
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true });
    };

    const onLeaveBack = (batch: Element[]): void => {
      gsap.set(batch, { opacity: 0, y: 100, overwrite: true });
    };

    ScrollTrigger.batch(`.${boxClassName}`, {
      onEnter: (batch: Element[]) => { onEnter(batch); },
      onLeave: (batch: Element[]) => { onLeave(batch); },
      onEnterBack: (batch: Element[]) => { onEnterBack(batch); },
      onLeaveBack: (batch: Element[]) => { onLeaveBack(batch); },
    });


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(`.${boxClassName}`);
    };
  }, [boxClassName]);

  return <div>{children}</div>;
};

export default AnimatedBoxes;
