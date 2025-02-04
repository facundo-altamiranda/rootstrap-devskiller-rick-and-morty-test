import Image from "next/image";

export async function CharacterDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character: Character = await res.json();

  return (
    <main className="container mx-auto mt-5">
      <div className="flex bg-white shadow-md rounded-lg">
        <Image
          className="rounded-l-lg"
          src={character.image}
          width={340}
          height={340}
          alt={character.name}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold">{character.name}</h1>
          <p className="text-lg">
            <b>Status:</b> {character.status}
          </p>
          <p className="text-lg">
            <b>Species:</b> {character.species}
          </p>
          <p className="text-lg">
            <b>Gender:</b> {character.gender}
          </p>
          <p className="text-lg">
            <b>Origin:</b> {character.origin.name}
          </p>
          <p className="text-lg">
            <b>Location:</b> {character.location.name}
          </p>
        </div>
      </div>
    </main>
  );
}

export default CharacterDetail;
