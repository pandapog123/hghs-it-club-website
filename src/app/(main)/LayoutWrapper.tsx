"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import TopBar from "./TopBar";
import { useRouter } from "next/router";

export default function LayoutWrapper({ children }: PropsWithChildren) {
  // const hideTopBarRoutes = ["/account/login", "/account/signup"];

  // const router = useRouter();

  // if (!router.isReady) return null;

  // const [showTopBar, setShowTopBar] = useState(true);

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   if (hideTopBarRoutes.includes(router.pathname)) {
  //     setShowTopBar(false);
  //   } else {
  //     setShowTopBar(true);
  //   }
  // }, [router.pathname, router.isReady]);

  return (
    <>
      {/* {showTopBar && <TopBar />} */}
      <TopBar />
      {children}
    </>
  );
}
