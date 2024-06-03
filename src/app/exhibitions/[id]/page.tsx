interface ExhibitionProps {
  params: {
    id: string;
  };
}

export default function Page(props: ExhibitionProps) {
  const name = props.params.id;

  return <div>{name}</div>;
}
