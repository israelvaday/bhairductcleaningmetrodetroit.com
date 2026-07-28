import { ImageResponse } from "next/og";
import { BIZ } from "@/lib/business";

export const dynamic = "force-static";
export const alt = `${BIZ.name} — Metro Detroit Garage Door Company (${BIZ.bsis})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(1100px 600px at 80% -10%, rgba(201,162,74,0.22), transparent 60%)," +
            "radial-gradient(900px 700px at -10% 110%, rgba(201,162,74,0.14), transparent 55%)," +
            "linear-gradient(180deg, #0B0E12 0%, #0B0E12 100%)",
          color: "#F4F1EA",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* gold rule top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #8A6A1F 0%, #C9A24A 35%, #E9D08A 55%, #C9A24A 70%, #8A6A1F 100%)",
            display: "flex",
          }}
        />

        {/* brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: "linear-gradient(135deg, #C9A24A 0%, #8A6A1F 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              boxShadow: "0 10px 30px rgba(201,162,74,0.35)",
            }}
          >
            🚪
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1 }}>
              BH GARAGE DOOR METRO DETROIT
            </div>
            <div style={{ fontSize: 18, color: "#C9A24A", marginTop: 6, letterSpacing: 2, fontWeight: 700 }}>
              LICENSED & INSURED
            </div>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: -2,
              backgroundImage: "linear-gradient(135deg, #F4E3B1 0%, #C9A24A 55%, #8A6A1F 100%)",
              backgroundClip: "text",
              color: "transparent",
              display: "flex",
            }}
          >
            Door stuck? We&apos;re 15 min away.
          </div>
          <div style={{ fontSize: 30, color: "#C8C4BB", maxWidth: 980, display: "flex" }}>
            Licensed & insured garage door company. Springs · Openers · Installation · Commercial.
          </div>
        </div>

        {/* footer chips */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <Chip>Licensed & insured</Chip>
          <Chip>{BIZ.phone}</Chip>
          <Chip>bhgaragedoormetrodetroit.com</Chip>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontSize: 22, color: "#C8C4BB", letterSpacing: 1 }}>METRO DETROIT DISPATCH</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 22px",
        borderRadius: 999,
        border: "1px solid rgba(201,162,74,0.45)",
        background: "rgba(201,162,74,0.08)",
        color: "#E9D08A",
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: 0.5,
      }}
    >
      {children}
    </div>
  );
}

