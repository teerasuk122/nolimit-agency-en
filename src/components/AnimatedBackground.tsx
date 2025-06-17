'use client'

import { useEffect, useRef, useState } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
  targetX: number
  targetY: number
}

interface FloatingOrb {
  width: number
  height: number
  background: string
  top: string
  left: string
  animationDelay: string
  animationDuration: string
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)
  const [floatingOrbs, setFloatingOrbs] = useState<FloatingOrb[]>([])
  const [isClient, setIsClient] = useState(false)

  // Initialize client-side only content
  useEffect(() => {
    setIsClient(true)
    
    // Generate floating orbs after hydration
    const orbs: FloatingOrb[] = Array.from({ length: 6 }, (_, i) => ({
      width: Math.random() * 400 + 200,
      height: Math.random() * 400 + 200,
      background: [
        'linear-gradient(45deg, #06b6d4, #3b82f6)',
        'linear-gradient(45deg, #8b5cf6, #ec4899)',
        'linear-gradient(45deg, #10b981, #06b6d4)',
        'linear-gradient(45deg, #f59e0b, #ef4444)',
        'linear-gradient(45deg, #6366f1, #8b5cf6)',
        'linear-gradient(45deg, #14b8a6, #06b6d4)'
      ][i],
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${i * 2}s`,
      animationDuration: `${8 + Math.random() * 8}s`
    }))
    setFloatingOrbs(orbs)
  }, [])

  useEffect(() => {
    if (!isClient) return
    
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = []
      const colors = [
        'rgba(6, 182, 212, 0.6)',    // cyan-500
        'rgba(139, 92, 246, 0.6)',   // purple-500
        'rgba(236, 72, 153, 0.6)',   // pink-500
        'rgba(59, 130, 246, 0.6)',   // blue-500
        'rgba(16, 185, 129, 0.6)',   // emerald-500
        'rgba(245, 158, 11, 0.6)'    // amber-500
      ]

      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          targetX: Math.random() * canvas.width,
          targetY: Math.random() * canvas.height
        })
      }
      particlesRef.current = particles
    }
    initParticles()

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current
      const particles = particlesRef.current

      particles.forEach((particle, index) => {
        // Mouse interaction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 200

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
          particle.speedX -= Math.cos(angle) * force * 0.02
          particle.speedY -= Math.sin(angle) * force * 0.02
        }

        // Natural floating movement
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Drift towards target
        const targetDx = particle.targetX - particle.x
        const targetDy = particle.targetY - particle.y
        particle.x += targetDx * 0.001
        particle.y += targetDy * 0.001

        // Update target occasionally
        if (Math.random() < 0.001) {
          particle.targetX = Math.random() * canvas.width
          particle.targetY = Math.random() * canvas.height
        }

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Damping
        particle.speedX *= 0.995
        particle.speedY *= 0.995

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (120 - distance) / 120
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw mouse glow
      if (mouse.x && mouse.y) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100)
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0.1)')
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2)
        ctx.fill()
      }

      animationIdRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [isClient])

  if (!isClient) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
    )
  }

  return (
    <>
      {/* Canvas for particle animation */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none animated-background"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #1e293b 75%, #0f172a 100%)' }}
      />
      
      {/* Additional CSS animated background layers */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black/30">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 opacity-30 gpu-accelerated">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 animate-pulse"
            style={{ animationDuration: '8s' }}
          ></div>
          <div 
            className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-emerald-500/5 to-amber-500/10 animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '4s' }}
          ></div>
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>

        {/* Floating orbs - only render after hydration */}
        {floatingOrbs.map((orb, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20 animate-pulse gpu-accelerated"
            style={{
              width: `${orb.width}px`,
              height: `${orb.height}px`,
              background: orb.background,
              top: orb.top,
              left: orb.left,
              animationDelay: orb.animationDelay,
              animationDuration: orb.animationDuration
            }}
          ></div>
        ))}

        {/* Additional mouse following effect */}
        <div 
          className="absolute pointer-events-none opacity-10 transition-all duration-1000 ease-out"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.15), transparent 70%)',
            width: '100%',
            height: '100%'
          }}
        ></div>
      </div>
    </>
  )
} 