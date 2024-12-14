import React, { useEffect, useRef } from "react";

const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  // Adjustable speed and connection settings
  const INITIAL_SPEED = 0.25; // Base speed for particles' initial motion (slower speed)
  const REPELLING_SPEED = 0.18; // Slower speed for repelling particles from mouse
  const MAX_REPULSION_DISTANCE = 200; // Maximum distance at which particles are repelled by the mouse
  const MAX_CONNECTION_DISTANCE = 150; // Maximum distance to draw a connecting line

  // Generate random particles
  const generateParticles = (count) => {
    let particlesArray = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 4 + 1; // Random size between 2px and 7px
      const speedX = Math.random() * INITIAL_SPEED - INITIAL_SPEED / 2;
      const speedY = Math.random() * INITIAL_SPEED - INITIAL_SPEED / 2;
      const positionX = Math.random() * window.innerWidth;
      const positionY = Math.random() * window.innerHeight;

      // Blue hue with varying saturation and lightness
      const hue = 210; // Hue for blue color
      const saturation = Math.random() * 50 + 50; // Random saturation between 50% and 100%
      const lightness = Math.random() * 30 + 30; // Random lightness between 30% and 60%
      const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      particlesArray.push({
        size,
        speedX,
        speedY,
        positionX,
        positionY,
        color,
        baseSpeedX: speedX,
        baseSpeedY: speedY,
      });
    }
    particles.current = particlesArray;
  };

  // Handle mouse movement
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    particles.current.forEach((particle) => {
      const distance = Math.sqrt(
        Math.pow(particle.positionX - mouseX, 2) + Math.pow(particle.positionY - mouseY, 2)
      );

      if (distance < MAX_REPULSION_DISTANCE) {
        const distanceFactor = (MAX_REPULSION_DISTANCE - distance) / MAX_REPULSION_DISTANCE;
        const repulsionSpeed = REPELLING_SPEED * distanceFactor; // Slower repulsion

        const angle = Math.atan2(particle.positionY - mouseY, particle.positionX - mouseX);
        const forceX = Math.cos(angle) * repulsionSpeed;
        const forceY = Math.sin(angle) * repulsionSpeed;

        particle.speedX += forceX;
        particle.speedY += forceY;
      } else {
        particle.speedX = particle.baseSpeedX;
        particle.speedY = particle.baseSpeedY;
      }
    });
  };

  // Draw particles and lines
  const drawParticles = (ctx) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Draw lines between nearby particles
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].positionX - particles.current[j].positionX;
        const dy = particles.current[i].positionY - particles.current[j].positionY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < MAX_CONNECTION_DISTANCE) {
          const opacity = 1 - distance / MAX_CONNECTION_DISTANCE;
          ctx.beginPath();
          ctx.moveTo(particles.current[i].positionX, particles.current[i].positionY);
          ctx.lineTo(particles.current[j].positionX, particles.current[j].positionY);
          ctx.strokeStyle = `rgba(211, 211, 211, ${opacity})`; // Light blue color with fading opacity
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.closePath();
        }
      }
    }

    // Draw particles
    particles.current.forEach((particle) => {
      ctx.beginPath();
      ctx.arc(particle.positionX, particle.positionY, particle.size, 0, 2 * Math.PI);
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();

      particle.positionX += particle.speedX;
      particle.positionY += particle.speedY;

      if (particle.positionX <= 0 || particle.positionX >= window.innerWidth) {
        particle.speedX *= -1;
      }
      if (particle.positionY <= 0 || particle.positionY >= window.innerHeight) {
        particle.speedY *= -1;
      }
    });
  };

  // Animation loop
  const animateCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    drawParticles(ctx);
    requestAnimationFrame(animateCanvas);
  };

  // Set up the canvas and mouse event listener
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    generateParticles(100); // Generate 100 particles

    window.addEventListener("mousemove", handleMouseMove);

    animateCanvas();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }} />;
};

export default CanvasBackground;
