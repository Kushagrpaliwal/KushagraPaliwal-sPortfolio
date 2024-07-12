"use client"
import { useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';

const SmoothScrollbarWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const scrollbarElement = document.querySelector<HTMLElement>('#my-scrollbar');
    if (scrollbarElement) {
      SmoothScrollbar.init(scrollbarElement, {
        damping: 0.01,
        thumbMinSize: 20,
        renderByPixels: true,
        continuousScrolling: true,
      });
    }
  }, []);

  return <div id="my-scrollbar">{children}</div>;
};

export default SmoothScrollbarWrapper;
