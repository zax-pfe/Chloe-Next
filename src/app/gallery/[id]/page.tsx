interface ArtworksPageItem {
  params: {
    id: number;
  };
}

export default function Page(props: ArtworksPageItem) {
  const index = props.params.id;

  return <div></div>;
}
