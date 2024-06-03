import ExhibitionNav from "@/components/exhibitionNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ExhibitionNav />
      {children}
    </div>
  );
}
