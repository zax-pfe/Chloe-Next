"use server";
import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

export async function findAllArtworks() {
  const ARTWORKS_QUERY = `*[_type == "artwork"]{
    name,
    "cover": cover.asset->url,
    "coverWidth": cover.asset->metadata.dimensions.width,
    "coverHeight": cover.asset->metadata.dimensions.height
  }`;

  const artworks = await sanityFetch<SanityDocument[]>({
    query: ARTWORKS_QUERY,
  });

  const artlist = artworks.map((artwork) => ({
    name: artwork.name,
    cover: artwork.cover,
  }));

  return artlist;
}
