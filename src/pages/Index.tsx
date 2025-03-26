
import { AnimeNavBarDemo } from "@/components/demos/AnimeNavBarDemo";
import { HeroGeometricDemo } from "@/components/demos/HeroGeometricDemo";
import { BounceCards } from "@/components/ui/bounce-cards";
import { Vortex } from "@/components/ui/vortex";

const images = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <AnimeNavBarDemo />
      <HeroGeometricDemo />
      
      {/* Portfolio Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Portfolio</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            Take a look at some of our recent projects. We've helped businesses of all sizes transform their digital presence.
          </p>
          
          <BounceCards
            images={images}
            containerWidth={800}
            containerHeight={500}
            animationDelay={0.5}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            className="mx-auto mb-16"
          />
        </div>
      </div>
      
      {/* Footer */}
      <div className="h-[500px]">
        <Vortex
          backgroundColor="black"
          rangeY={200}
          particleCount={400}
          baseHue={220}
          className="flex flex-col items-center justify-center px-4 py-16 w-full h-full"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-8">Ready to transform your digital presence?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-12">
            <div className="text-center">
              <h3 className="text-white text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-white/70">info@digitalinnovation.com</p>
              <p className="text-white/70">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-white text-xl font-semibold mb-2">Location</h3>
              <p className="text-white/70">123 Innovation Drive</p>
              <p className="text-white/70">San Francisco, CA 94103</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-white text-xl font-semibold mb-2">Follow Us</h3>
              <p className="text-white/70">Twitter • LinkedIn • Instagram</p>
            </div>
          </div>
          
          <div className="text-white/50 text-sm">
            © 2023 Digital Innovation. All rights reserved.
          </div>
        </Vortex>
      </div>
    </div>
  );
};

export default Index;
