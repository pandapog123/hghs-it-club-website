import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import Icon from "./icon.png";

export const metadata: Metadata = {
  title: "HGHS I.T. Club",
  description: "Official HGHS I.T. Club Website.",
  icons: {
    icon: Icon.src,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
