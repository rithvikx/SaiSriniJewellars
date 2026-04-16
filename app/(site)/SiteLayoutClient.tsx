"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartHydration from "@/components/cart/CartHydration";

const CartDrawer = dynamic(() => import("@/components/cart/CartDrawer"), {
  ssr: false,
});

export default function SiteLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CartHydration />
      <Navbar />
      <CartDrawer />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
