import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Drawn with the same palette and restraint as the site itself. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fbfaf8",
          color: "#1a1915",
          padding: 72,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 22,
                letterSpacing: 6,
                textTransform: "uppercase",
                color: "#6b675d",
              }}
            >
              Photography studio
            </div>
            <div
              style={{
                marginTop: 40,
                fontSize: 132,
                letterSpacing: -4,
                lineHeight: 1,
                display: "flex",
              }}
            >
              {site.name}
              <span style={{ color: "#9c4a24" }}>.</span>
            </div>
            <div
              style={{
                marginTop: 28,
                fontSize: 34,
                lineHeight: 1.35,
                color: "#6b675d",
                maxWidth: 640,
              }}
            >
              {site.tagline}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 48,
              fontSize: 22,
              color: "#6b675d",
              borderTop: "1px solid #e1ddd4",
              paddingTop: 28,
            }}
          >
            <span>Lisbon &amp; Copenhagen</span>
            <span>Est. {site.founded}</span>
            <span>atelier.example.com</span>
          </div>
        </div>

        <div
          style={{
            width: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
            marginLeft: 56,
          }}
        >
          <div style={{ display: "flex", height: 150, background: "#e6e3db" }} />
          <div style={{ display: "flex", height: 220, background: "#9c4a24", opacity: 0.85 }} />
          <div style={{ display: "flex", height: 96, background: "#1a1915", opacity: 0.16 }} />
        </div>
      </div>
    ),
    size,
  );
}
