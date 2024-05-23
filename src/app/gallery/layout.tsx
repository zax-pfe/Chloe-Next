import GalleryNav from "@/components/gallerynav";
import Navbar from "@/components/navbar";
import "@/styles/GalleryNav.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <GalleryNav />

      <div className="content-container">{children}</div>
    </div>
  );
}
