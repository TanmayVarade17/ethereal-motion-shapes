
import { AnimeNavBarDemo } from "@/components/demos/AnimeNavBarDemo";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { GridMotion } from "@/components/ui/grid-motion";
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
import { Vortex } from "@/components/ui/vortex";

const portfolioImages = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=500&auto=format"
];

const serviceFrames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    mediaSize: 1,
    isHovered: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <AnimeNavBarDemo />
      <HeroGeometric />
      
      {/* Our Services Section */}
      <div className="bg-zinc-900 py-20">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">Our Services</h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
            We provide end-to-end digital solutions tailored to your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Mobile Application Development</h3>
              <p className="text-gray-400">Custom iOS and Android apps built with the latest technologies to deliver exceptional user experiences.</p>
            </div>
            
            <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-rose-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Website Development</h3>
              <p className="text-gray-400">Responsive, high-performance websites and web applications built with modern frameworks and technologies.</p>
            </div>
            
            <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-xl border border-zinc-700/50 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-500/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-400">User-centered design that creates intuitive, engaging experiences that convert visitors into customers.</p>
            </div>
          </div>
        </div>
        
        <div className="h-[400px] mt-10">
          <DynamicFrameLayout 
            frames={serviceFrames} 
            className="w-full h-full" 
            hoverSize={6}
            gapSize={4}
          />
        </div>
      </div>
      
      {/* Portfolio Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Portfolio</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Take a look at some of our recent projects. We've helped businesses of all sizes transform their digital presence.
          </p>
          
          <div className="h-[600px] w-full">
            <GridMotion 
              items={portfolioImages}
              gradientColor="#f5f5f5"
              className="relative z-10"
            />
          </div>
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
