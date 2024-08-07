import React, { useEffect, useRef } from 'react';

interface HorizontalScrollProps {
  images: string[];
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ images }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        if (event.deltaY !== 0) {
          scrollContainerRef.current.scrollLeft += event.deltaY;
          event.preventDefault(); // Prevent vertical scrolling while horizontal scrolling is active
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
      return () => container.removeEventListener('wheel', handleScroll);
    }
  }, []);

  return (
    <div className="flex overflow-x-auto overflow-y-hidden w-screen h-screen" ref={scrollContainerRef}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Scroll Image ${index}`} className="flex-shrink-0 w-screen h-screen object-cover" />
      ))}
    </div>
  );
};

export default HorizontalScroll;
