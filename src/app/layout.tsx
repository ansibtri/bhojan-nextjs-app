import { JSX } from "react";
import "@/../styles/global.css";

export default function RootLayout({ children }: {
    children: React.ReactNode
}): JSX.Element {
    return (
        <html lang="en">
            <link rel="icon" href="/logo.ico" />
            <body>
                {children}
            </body>
        </html>
    )
}