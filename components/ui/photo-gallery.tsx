import React from "react";
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils'; // Adjust the import path as needed

type PhotoGalleryProps = {
    containerClass?: string;
    className?: string;
    items: { src: StaticImageData }[];
  };
  
  export function PhotoGallery({
    containerClass,
    className,
    items,
  }: PhotoGalleryProps) {
    return (
      <div
        className={cn(
          "gallery mb-[var(--size)] grid grid-cols-6 gap-1",
          containerClass
        )}
      >
        {items.map((image, index) => (
          <div
            key={index}
            className={cn(
              "gallery-img size-[calc(var(--size)*2)] rounded object-cover transition-[clip-path,filter] duration-75 relative",
              className
            )}
          >
            <Image
              src={image.src}
              alt={`image-${index}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    );
  }