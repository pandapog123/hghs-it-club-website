import { PropsWithChildren } from "react";
import LayoutWrapper from "./LayoutWrapper";

export default function RootLayout({ children }: PropsWithChildren) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
