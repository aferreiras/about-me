import type { Metadata } from "next"
import localFont from "next/font/local"
import StyledComponentsRegistry from "./lib/registry"
import { GlobalStyles } from "./styles/GlobalStyles"

export const metadata: Metadata = {
  title: "About André Ferreira",
  description: "An aferreiras professional page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
          <StyledComponentsRegistry>
            <GlobalStyles />
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
  )
}
