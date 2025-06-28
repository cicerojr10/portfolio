import { useEffect, useState, memo } from "react";

// Helper function to generate a layer of particles
const generateLayer = (count, { minSize, maxSize, minOpacity, maxOpacity }) => {
  const layer = [];
  for (let i = 0; i < count; i++) {
    layer.push({
      id: i,
      size: Math.random() * (maxSize - minSize) + minSize,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
      animationDuration: Math.random() * 4 + 2, // Keep the subtle pulse
    });
  }
  return layer;
};


const StarBackgroundComponent = ({ distantStarsStyle, midStarsStyle, nearParticlesStyle }) => {
    const [distantStars, setDistantStars] = useState([]);
    const [midStars, setMidStars] = useState([]);
    const [nearParticles, setNearParticles] = useState([]);

    useEffect(() => {
        const updateLayers = () => {
            const baseCount = Math.floor((window.innerWidth * window.innerHeight) / 10000);
            
            // Distant stars: numerous, small, and faint
            setDistantStars(generateLayer(baseCount, { 
                minSize: 1, 
                maxSize: 2, 
                minOpacity: 0.2, 
                maxOpacity: 0.6 
            }));

            // Mid stars: fewer, slightly larger, and brighter
            setMidStars(generateLayer(Math.floor(baseCount / 2), { 
                minSize: 1.5, 
                maxSize: 2.5, 
                minOpacity: 0.5, 
                maxOpacity: 0.9 
            }));

            // Near particles: fewest, smallest, like dust, variable opacity
            setNearParticles(generateLayer(Math.floor(baseCount / 4), { 
                minSize: 0.5, 
                maxSize: 1.5, 
                minOpacity: 0.7, 
                maxOpacity: 1.0 
            }));
        };

        updateLayers();
        window.addEventListener("resize", updateLayers);
        return () => window.removeEventListener("resize", updateLayers);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Layer 1: Distant Stars */}
            <div style={distantStarsStyle} className="w-full h-full absolute inset-0">
                {distantStars.map((star) => (
                    <div
                        key={star.id}
                        className="star animate-pulse-subtle"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            opacity: star.opacity,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Layer 2: Mid-ground Stars */}
            <div style={midStarsStyle} className="w-full h-full absolute inset-0">
                {midStars.map((star) => (
                    <div
                        key={star.id}
                        className="star animate-pulse-subtle"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            opacity: star.opacity,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                ))}
            </div>

            {/* Layer 3: Near Particles */}
            <div style={nearParticlesStyle} className="w-full h-full absolute inset-0">
                {nearParticles.map((particle) => (
                    <div
                        key={particle.id}
                        className="star" // Using 'star' class for the base styling (bg-white, rounded-full)
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            opacity: particle.opacity,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export const StarBackground = memo(StarBackgroundComponent);