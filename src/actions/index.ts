"use server";
import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { PortableTextBlock } from "@portabletext/types";

export interface Artwork {
  name: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  }[];
  materiaux: string;
  dimensions: string;
  date: string;
}

export interface Thumbnail_interface {
  url: string;
  width: number;
  height: number;
}

export interface Exhibition_interface {
  name: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  description: PortableTextBlock[];
  dates: string;
  lieu: string;
  images?: {
    url: string;
    width: number;
    height: number;
  }[];
}

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
    thumbnail: artwork.cover,
  }));

  return artlist;
}

export async function findArtworkByName(name: string) {
  const ARTWORK_QUERY = `*[_type == "artwork" && name == $name][0]{
    name,
    "cover": cover.asset->url,
    "coverWidth": cover.asset->metadata.dimensions.width,
    "coverHeight": cover.asset->metadata.dimensions.height,
    thumbnail[] {
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    },
    materiaux,
    dimensions,
    date
  }`;

  const artwork = await sanityFetch<Artwork>({
    query: ARTWORK_QUERY,
    params: { name },
  });

  return artwork;
}

export async function findAllExhibitions() {
  const EXHIBITIONS_QUERY = `*[_type == "exhibition"]{
    name,
    "cover": cover.asset->url,
    "coverWidth": cover.asset->metadata.dimensions.width,
    "coverHeight": cover.asset->metadata.dimensions.height,
    description,
    dates,
    lieu
  }`;

  const exhibitions = await sanityFetch<SanityDocument[]>({
    query: EXHIBITIONS_QUERY,
  });

  const exhibitionslist = exhibitions.map((exhibition) => ({
    name: exhibition.name,
    cover: exhibition.cover,
    description: exhibition.description,
    date: exhibition.dates,
    lieu: exhibition.lieu,
  }));

  return exhibitionslist;
}

export async function findExhibitionByName(name: string) {
  const EXHIBITION_QUERY = `*[_type == "exhibition" && name == $name][0]{
    name,
    "cover": cover.asset->url,
    "coverWidth": cover.asset->metadata.dimensions.width,
    "coverHeight": cover.asset->metadata.dimensions.height,
    description,
    dates,
    lieu,
    "images": images[]{
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }`;

  const exhibition = await sanityFetch<Exhibition_interface>({
    query: EXHIBITION_QUERY,
    params: { name },
  });

  const exhibition_element = {
    name: exhibition.name,
    cover: exhibition.cover,
    coverWidth: exhibition.coverWidth,
    coverHeight: exhibition.coverHeight,
    description: exhibition.description,
    dates: exhibition.dates,
    lieu: exhibition.lieu,
    images: exhibition.images,
  };

  return exhibition_element;
}
