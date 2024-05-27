import prisma from "@/lib/prisma";
import * as actions from "@/actions";
import Image from "next/image";

export default async function Page() {
  const artworks = await actions.fetchArtworksByCategory(1);
  return (
    <div>
      {!artworks ? (
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
      )}
    </div>
  );
}
