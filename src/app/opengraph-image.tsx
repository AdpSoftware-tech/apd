import { ImageResponse } from "next/og";

export const alt = "A.P.D. Software Solutions - Desarrollo de software y QA en Costa Rica";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "linear-gradient(135deg, #04233A 0%, #153656 60%, #06599B 100%)",
                    color: "#EEEEEE",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ fontSize: 28, letterSpacing: 6, color: "#7FA0BD", textTransform: "uppercase" }}>
                    Software para empresas · Costa Rica
                </div>
                <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
                    A.P.D. Software Solutions
                </div>
                <div style={{ fontSize: 36, marginTop: 28, color: "#C9D7E3", maxWidth: 950 }}>
                    Desarrollo a medida, QA Automation y plataformas web para crecer con claridad.
                </div>
            </div>
        ),
        size
    );
}
