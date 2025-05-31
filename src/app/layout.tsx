import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import TopBar from "./TopBar";
import Icon from "./icon.png";

export const metadata: Metadata = {
  title: "HGHS I.T. Club",
  description: "Official HGHS I.T. Club Website.",
  icons: {
    icon: Icon.src,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  let includeTopBar = true;
  let includeBottomBar = true;

  return (
    <html lang="en">
      <body>
        {includeTopBar && <TopBar />}
        {children}
      </body>
    </html>
  );
}
