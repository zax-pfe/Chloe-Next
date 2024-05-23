import GalleryNav from "@/components/gallerynav";
import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <GalleryNav />

      <div className="content-container">{children}</div>
    </div>
  );
}
