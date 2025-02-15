import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/magicui/text-animate";

export const Hero = () => {
  return (
    <>
      {/* Full-screen background */}
      <div className="relative w-full min-h-screen bg-gray-900 flex items-center justify-center text-center overflow-hidden">
        
        {/* Vibrant Background Gradient */}
        <div
          className="absolute inset-0 w-full h-full blur-[160px] z-0"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.3) 10%, rgba(14, 165, 233, 0.8) 25%, rgba(232, 121, 249, 0.6) 50%, rgba(79, 70, 229, 0.9) 100%)",
          }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6">
          {/* Enhanced Sparkle Text */}
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-yellow-400 hover:duration-300">
            <h1
              className="font-display text-2xl md:text-3xl font-semibold mb-2 
                        bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50
                        bg-clip-text text-transparent animate-pulse
                        drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]"
            >
              Luxury Nail Care
            </h1>
          </AnimatedShinyText>

          {/* Elevation Text */}
          <h1 className="animate-fade-up [--animation-delay:400ms] opacity-100 font-display text-5xl md:text-7xl font-semibold mb-6">
            <TextAnimate animation="blurInUp" by="character" once>
              Elevate Your Natural Beauty
            </TextAnimate>
          </h1>

          {/* Description Text */}
          <p className="animate-fade-up [--animation-delay:600ms] opacity-100 text-text-light max-w-lg mx-auto mb-8 text-lg">
            Experience the perfect blend of artistry and care in our luxury nail salon,
            where every visit is a journey to elegance.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
