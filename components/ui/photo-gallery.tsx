import React from "react";
import { cn } from "@/lib/utils"; // or wherever your "cn" utility is

type PhotoGalleryProps = {
  containerClass?: string;
  className?: string;
  items: { src: string }[];
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
        <img
          key={index}
          src={image.src}
          alt={`image+${index}`}
          className={cn(
            "gallery-img size-[calc(var(--size)*2)] rounded object-cover transition-[clip-path,filter] duration-75",
            className
          )}
        />
      ))}
    </div>
  );
}
