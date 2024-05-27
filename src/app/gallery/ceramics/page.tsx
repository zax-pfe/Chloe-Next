import prisma from "@/lib/prisma";
import * as actions from "@/actions";

export default async function Page() {
  const artworks = await actions.fetchArtworksByCategory(1);
  return (
    <div>
      {!artworks ? (
        <div>No artworks found</div>
      ) : (
        artworks.map((artwork) => (
          <div key={artwork.id}>
            {artwork.name} - {artwork.dimensions}
          </div>
        ))
      )}
    </div>
  );
}
