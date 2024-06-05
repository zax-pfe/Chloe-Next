"use client";
import useLockBodyScroll from "@/hooks/adjustScrollBar";
import useDevice from "@/app/utils/detectDevice";

export default function ContactPage() {
  const device = useDevice();
  useLockBodyScroll(device);

  return <div>{/* <PageItem index={1} index_max={2} /> */}</div>;
}
