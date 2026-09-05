import { promises as fs } from "fs"
import path from "path"
import { ImageResponse } from "next/og"
import { profile } from "./lib/site-data"

export const alt = "Bivek Gharti — Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const photo = await fs.readFile(path.join(process.cwd(), "public", "profile.jpeg"))
  const avatar = `data:image/jpeg;base64,${photo.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14120F",
          color: "#F5F2EB",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
          <img
            src={avatar}
            width={190}
            height={190}
            style={{ borderRadius: 28, objectFit: "cover", border: "4px solid #F3A83F" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: "-0.03em" }}>
              {profile.name}
            </div>
            <div style={{ fontSize: 36, color: "#F3A83F", marginTop: 8 }}>{profile.role}</div>
          </div>
        </div>

        <div style={{ fontSize: 31, color: "#A8A096", lineHeight: 1.4, maxWidth: 1000 }}>
          I ship real products end to end — a PTE test platform, a fleet-management tool and a PG
          marketplace with 200+ live listings.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#F3A83F",
            borderTop: "2px solid #2A251F",
            paddingTop: 26,
          }}
        >
          <span>bivekgharti.com.np</span>
          <span style={{ color: "#A8A096" }}>{profile.location}</span>
        </div>
      </div>
    ),
    size,
  )
}
