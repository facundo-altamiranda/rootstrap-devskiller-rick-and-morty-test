"use client";

import { useState } from "react";
import Link from "next/link";

import SearchBar from "@/components/SearchBar";
import Image from "next/image";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Pagination>();
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    );
    const data = await res.json();
    setCharacters(data.results || []);
    setInfo(data.info);
  };

  const handlePagination = async (href: string, page: number) => {
    const res = await fetch(href);
    const data = await res.json();
    setCharacters(data.results || []);
    setInfo(data.info);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen">
      <div
        className={`flex flex-col items-center ${
          characters.length > 0 ? "mb-8" : "justify-center min-h-screen"
        }`}
      >
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {characters.map((character, index) => (
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            key={index}
          >
            <Image
              className="w-full h-48 object-cover"
              width={340}
              height={340}
              src={character.image}
              alt={character.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{character.name}</h2>
              <button className="text-[#53ff11] mt-2">
                <Link href={`/character/${character.id}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      {characters.length > 0 && (
        <>
          <div className="flex space-x-1 justify-center">
            <button
              className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-[#53ff11]"
              disabled={!info?.prev}
              onClick={() => handlePagination(info?.prev!, currentPage - 1)}
            >
              Prev
            </button>
            <p className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-[#53ff11]">
              {currentPage}
            </p>
            <button
              className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm text-[#53ff11]"
              disabled={!info?.next}
              onClick={() => handlePagination(info?.next!, currentPage + 1)}
            >
              Next
            </button>
          </div>
          <footer className="mt-8 text-center bg-[#202329] p-8">
            <p className="text-[#53ff11]">Total Results: {info?.count}</p>
          </footer>
        </>
      )}
    </div>
  );
};

export default HomePage;
