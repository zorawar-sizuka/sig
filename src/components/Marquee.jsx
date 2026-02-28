// "use client";

// import Marquee from "react-fast-marquee";
// import Image from "next/image"; 
// import marqueeLogos from "../data/marquee";

// export default function LogoMarquee({
//   speed = 40,
//   pauseOnHover = true,
//   className = "",
//   originalColor = false, 
// }) {
//   return (
//     <div className={`w-full ${className}`}>
      
//       <div className="text-center px-16">
       
//       </div>

//       <Marquee
//         gradient={false}
//         speed={speed}
//         pauseOnHover={pauseOnHover}
//         autoFill
//         className="overflow-hidden"
//       >
//         {marqueeLogos.map((l, i) => (
//           <div
//             key={l.alt + i}
//             className="mx-8 lg:mx-14 flex items-center justify-center relative group"
//           >
//             {/* Premium white effect container */}
//             <div className="relative h-8 md:h-10 lg:h-12 w-auto">
//               <div className="relative h-full w-auto">
//                 <Image
//                   src={l.src}
//                   alt={l.alt}
//                   width={160}
//                   height={50}
               
//                   className={`h-full w-auto object-contain opacity-100 transition-all duration-500 cursor-pointer 
//                     ${originalColor 
//                       ? "" 
//                       : "grayscale brightness-0 invert group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100"
//                     }`}
//                   priority={false} 
//                   placeholder="blur" 
//                   blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHLUw2QzGpEnb0STETSlGYb4kXq6CWWKv/9k="
//                 />
                
          
//                 {!originalColor && (
//                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-all duration-300 rounded-lg"></div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Marquee>
//     </div>
//   );
// } 






"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image"; 
import marqueeLogos from "../data/marquee";

export default function LogoMarquee({
  speed = 40,
  pauseOnHover = true,
  className = "",
}) {
  return (
    <div className={`w-full relative ${className}`}>
      
      {/* --- PREMIUM CAPSULE GLASSMORPHISM (Desktop Only) ---
        Added rounded-full for the capsule shape and full border.
      */}
      <div className="hidden md:block absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-none z-0" />

      {/* Marquee Container 
          1. Reduced py-6 to py-4 to make room for bigger logos.
          2. Added overflow-hidden and rounded-full so logos clip beautifully at the curved edges.
      */}
      <div className="relative z-10 py-2 md:py-4 overflow-hidden rounded-full">
        <Marquee
          gradient={false}
          speed={speed}
          pauseOnHover={pauseOnHover}
          autoFill
          className="overflow-hidden"
        >
          {marqueeLogos.map((l, i) => (
            <div
              key={l.alt + i}
              className="mx-8 lg:mx-14 flex items-center justify-center relative group"
            >
              {/* Logo container - Increased heights (h-12 to h-16) to make logos strictly bigger */}
              <div className="relative h-10 md:h-14 lg:h-16 w-auto">
                <div className="relative h-full w-auto">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={160}
                    height={64} // Bumped up base height to prevent scaling distortion
                    // Original colors, larger size, subtle elegant scaling
                    className="h-full w-auto object-contain opacity-100 transition-transform duration-500 cursor-pointer hover:scale-105 drop-shadow-sm"
                    priority={false} 
                    placeholder="blur" 
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHLUw2QzGpEnb0STETSlGYb4kXq6CWWKv/9k="
                  />
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}