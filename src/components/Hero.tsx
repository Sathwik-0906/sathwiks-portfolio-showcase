import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
// Make sure to declare 'THREE' as a global if using CDN
declare const THREE: any;

const Hero = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof THREE === 'undefined') return;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Crystal geometry
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xaa00ff,
      emissive: 0x3c00ff,
      metalness: 0.8,
      roughness: 0.1,
      transparent: true,
      opacity: 0.7,
    });
    const crystal = new THREE.Mesh(geometry, material);
    scene.add(crystal);
    
    // Wireframe
    const wireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(geometry),
      new THREE.LineBasicMaterial({ color: 0x8A2BE2, linewidth: 2 })
    );
    crystal.add(wireframe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00ffff, 2, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xff00ff, 2, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      crystal.rotation.x += 0.001;
      crystal.rotation.y += 0.001;
      
      // Follow mouse
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl font-black uppercase text-white animate-fade-in tracking-wider" style={{ textShadow: '0 0 15px hsl(var(--neon-purple))' }}>
          Sathwik Gurugubelli
        </h1>
        <p className="text-2xl md:text-3xl mt-4 mb-8 text-neon-cyan font-mono animate-fade-in stagger-1">
          Full Stack Developer
        </p>
        <div className="flex justify-center gap-4 animate-fade-in stagger-2">
            <a href="#contact" className="glass-button-3d"><span>Get In Touch</span></a>
            <a href="YOUR_RESUME_LINK_HERE" download className="glass-button-3d"><span>My Resume</span></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
