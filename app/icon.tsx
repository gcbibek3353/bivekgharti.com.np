import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

/** Monogram favicon in the site's amber-on-warm-dark palette. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14120F",
          color: "#F3A83F",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: "-0.05em",
          borderRadius: 14,
        }}
      >
        BG
      </div>
    ),
    size,
  )
}
