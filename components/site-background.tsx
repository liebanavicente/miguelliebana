"use client"

import { Warp } from "@paper-design/shaders-react"

export function SiteBackground() {
  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }} aria-hidden="true">
      <Warp
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          filter: "blur(70px)",
        }}
        fit="cover"
        colors={["#050505", "#111111", "#1a1a1a", "#f5f5f5"]}
        rotation={-15}
        scale={1.3}
        proportion={0.16}
        softness={1.6}
        distortion={0.2}
        swirl={0.35}
        swirlIterations={6}
        shape="edge"
        shapeScale={0.6}
        speed={1.1}
      />
      <div className="absolute inset-0" style={{ background: "rgba(5, 5, 5, 0.55)" }} />
    </div>
  )
}
