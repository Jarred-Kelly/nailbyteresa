// import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';

// interface ImageSliderProps {
//   images: string[];
//   hideOverlay?: boolean;
//   overlayClass?: string;
//   imageClass?: string;
//   enterFromClass?: string;
//   enterActiveClass?: string;
//   leaveActiveClass?: string;
//   autoplay?: boolean | number;
//   direction?: 'vertical' | 'horizontal';
//   perspective?: string;
// }

// const ImageSlider: React.FC<ImageSliderProps> = ({
//   images = [],
//   hideOverlay = false,
//   overlayClass = '',
//   imageClass = 'bg-cover bg-center bg-no-repeat',
//   enterFromClass = 'scale-0 origin-center',
//   enterActiveClass = 'transition-transform duration-300 ease-in-out',
//   leaveActiveClass = 'transition-transform duration-300 ease-in-out',
//   autoplay = false,
//   direction = 'vertical',
//   perspective = '1000px',
//   children,
// }) => {
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [currentDirection, setCurrentDirection] = useState<'up' | 'down' | 'left' | 'right'>('up');

//   useEffect(() => {
//     const loadImages = async () => {
//       setIsLoading(true);
//       await Promise.all(images.map(src => new Promise<void>((resolve, reject) => {
//         const img = new Image();
//         img.src = src;
//         img.onload = () => resolve();
//         img.onerror = () => reject();
//       })));
//       setIsLoading(false);
//     };
//     loadImages();
//   }, [images]);

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (autoplay) {
//       const delay = typeof autoplay === 'number' ? autoplay : 5000;
//       interval = setInterval(() => {
//         onNext();
//       }, delay);
//     }
//     return () => clearInterval(interval);
//   }, [autoplay, currentIndex]);

//   const onPrev = () => {
//     if (isLoading || isTransitioning) return;
//     setCurrentDirection(direction === 'horizontal' ? 'right' : 'down');
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const onNext = () => {
//     if (isLoading || isTransitioning) return;
//     setCurrentDirection(direction === 'horizontal' ? 'left' : 'up');
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
//     if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(ev.key)) {
//       ev.preventDefault();
//       if (isLoading || isTransitioning) return;
//       if (['ArrowUp', 'ArrowLeft'].includes(ev.key)) {
//         onPrev();
//       } else {
//         onNext();
//       }
//     }
//   };

//   return (
//     <div
//       ref={sliderRef}
//       tabIndex={0}
//       className={`relative flex w-full h-full items-center justify-center overflow-hidden transition-colors focus:outline-none focus:ring-1`}
//       style={{ perspective }}
//       onKeyDown={handleKeyDown}
//     >
//       <div
//         key={images[currentIndex]}
//         className={`${enterActiveClass} ${enterFromClass}`}
//         onTransitionEnd={() => setIsTransitioning(false)}
//       >
//         <img
//           src={images[currentIndex]}
//           className={imageClass}
//           onLoad={() => setIsTransitioning(true)}
//         />
//       </div>
//       {!hideOverlay && (
//         <div className={`absolute inset-0 ${overlayClass}`}>
//           {!isLoading && children}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageSlider;


// components/ImageSlider.tsx
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const images = [
  'https://picsum.photos/seed/waiting/1920/1080',
  'https://picsum.photos/seed/full-collapse/1920/1080',
  'https://picsum.photos/seed/five-stories-falling/1920/1080',
  'https://picsum.photos/seed/war-all-the-time/1920/1080',
  'https://picsum.photos/seed/a-city-by-the-light-divided/1920/1080',
  'https://picsum.photos/seed/common-existence/1920/1080',
  'https://picsum.photos/seed/no-devolucion/1920/1080',
];

const ImageSlider = () => {
  return (
    <div className="slide-container">
      <Slide>
        {images.map((url, index) => (
          <div key={index} className="each-slide">
            <img src={url} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;

