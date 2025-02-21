import { FocusCards } from "@/components/ui/focus-cards";

const cards: { title: string; src: string }[] = [
  { title: 'image-1', src: '/images/nails_1.jpg' },
  { title: 'image-2', src: '/images/nails_2.jpg' },
  { title: 'image-3', src: '/images/nails_3.jpg' },
  { title: 'image-4', src: '/images/nails_4.jpg' },
  { title: 'image-5', src: '/images/nails_5.jpg' },
  { title: 'image-6', src: '/images/nails_6.jpg' },
  { title: 'image-7', src: '/images/nails_7.jpg' },
  { title: 'image-8', src: '/images/nails_8.jpg' },
  { title: 'image-9', src: '/images/nails_9.jpg' },
  { title: 'image-10', src: '/images/nails_10.jpg' },
  { title: 'image-11', src: '/images/nails_11.jpg' },
  { title: 'image-12', src: '/images/nails_12.jpg' },
];

const Gallery: React.FC = () => {
  return (
    <div className="flex flex-col pt-10 mb-5">
      {/* Gallery grid section */}
      <div className="container mx-auto py-8 px-4">        
        <FocusCards cards={cards} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" />  
      </div>
    </div>
  );
};

export default Gallery;
