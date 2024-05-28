import prisma from "@/lib/prisma";
import * as actions from "@/actions";
import Image from "next/image";
import Gallery from "@/components/gallery";

export default async function Page() {
  const artworks = await actions.fetchArtworksByCategory(1);
  return (
    <div>
      <h1>Selected Works</h1>
      <Gallery filter="ceramique" />
      {/* {!artworks ? (
        <div>No artworks found</div>
      ) : (
        artworks.map((artwork) => (
          <div key={artwork.id}>
            {artwork.name} - {artwork.dimensions} - {artwork.coverImage}
            <Image
              src={artwork.coverImage}
              alt="test"
              width={500}
              height={300}
              layout="responsive"
            />
          </div>
        ))
      )} */}
    </div>
  );
}
