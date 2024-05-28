import PageItem from "@/components/pageItem";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArtworksPageItem {
  params: {
    id: number;
  };
}

export default function Page(props: ArtworksPageItem) {
  const index = props.params.id;
  return (
    <div>
      {" "}
      {`artwork : ${index}`}
      <PageItem index={index} />;
    </div>
  );
}
