import prisma from "@/lib/prisma";
import * as actions from "@/actions";
import Image from "next/image";
import Gallery from "@/components/gallery";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Gallery />
      {children}
    </div>
  );
}
