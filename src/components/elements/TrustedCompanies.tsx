"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"

const TrustedCompanies = () => {
  const logos = [
    "/images/logos/coinbase-logo.png",
    "/images/logos/riot-logo.png",
    "/images/logos/ethereum-logo.png",
    "/images/logos/metamask-logo.png",
    "/images/logos/next-logo.png",
    "/images/logos/solana-logo.png",
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const baseSpeed = 50 // Base speed in pixels per second
  const maxSpeed = 400 // Max speed during scroll
  const speedRef = useRef<number>(baseSpeed) // Initial speed
  const targetSpeedRef = useRef<number>(baseSpeed)
  const positionRef = useRef<number>(0)
  const totalWidthRef = useRef<number>(0)
  const lastTimestampRef = useRef<number>(0)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current

    if (!container || !content) return

    // Function to update totalWidth after images have loaded
    const updateTotalWidth = () => {
      totalWidthRef.current = content.scrollWidth / 2 // Half for seamless looping
    }

    updateTotalWidth()

    // Recalculate totalWidth when window resizes
    window.addEventListener("resize", updateTotalWidth)

    let rafId: number

    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp
      const delta = timestamp - lastTimestampRef.current
      lastTimestampRef.current = timestamp

      // Smoothly adjust the speed towards the target speed
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.05

      // Calculate the distance to move based on the speed and elapsed time
      const distance = (speedRef.current * delta) / 1000 // Convert ms to seconds
      positionRef.current -= distance

      // Reset position to loop seamlessly
      if (-positionRef.current >= totalWidthRef.current) {
        positionRef.current += totalWidthRef.current
      }

      content.style.transform = `translateX(${positionRef.current}px)`

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", updateTotalWidth)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Increase speed on scroll
      targetSpeedRef.current = maxSpeed
      console.log("Scroll detected, increasing speed")

      // Clear any existing timeout to prevent premature deceleration
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Return speed to base smoothly after scroll stops
      scrollTimeoutRef.current = setTimeout(() => {
        targetSpeedRef.current = baseSpeed // Return to base speed
        console.log("Returning to base speed")
      }, 300) // Adjust timing to make the effect smoother
    }

    // Listen for both mouse wheel and touch interactions for scrolling speed adjustment
    window.addEventListener("wheel", handleScroll)
    window.addEventListener("touchmove", handleScroll) // Trigger speed change on touch drag

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleScroll)
      window.removeEventListener("touchmove", handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="flex w-full h-full justify-center">
      <div className="max-w-[68rem] maximum-4:mx-auto overflow-hidden">
        <div className="relative mb-32 flex max-w-[90rem] flex-col items-center overflow-hidden py-3 pt-6">
          <p className="mb-12 text-[20px]">Powered by these trusted companies:</p>

          {/* Left and Right gradient overlays for the blurry darkness effect */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[16%] bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[16%] bg-gradient-to-l from-background to-transparent" />

          <div
            className="mask-gradient inline-flex w-full flex-nowrap overflow-hidden"
            ref={containerRef}
          >
            <div ref={contentRef} className="flex items-center">
              {logos.map((logo, index) => (
                <div key={index} className="mx-8 flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`Logo ${index}`}
                    width={150}
                    height={100}
                    className="max-w-none"
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless looping */}
              {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="mx-8 flex-shrink-0">
                  <Image
                    src={logo}
                    alt=""
                    width={150}
                    height={100}
                    className="max-w-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies
