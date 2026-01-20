import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fontFile = fileURLToPath(new URL("./Limelight-Regular.ttf", import.meta.url));
  const limelight = await readFile(fontFile);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          color: "#5E6E73",
          fontFamily: "Limelight",
          lineHeight: 1,
        }}
      >
        MV
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Limelight",
          data: limelight,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
