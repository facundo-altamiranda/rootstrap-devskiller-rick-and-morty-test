interface SearchBarProps {
  searchTerm: string
  setSearchTerm: any
  handleSearch: any
}

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
}: SearchBarProps) => {
  return (
    <div className="w-full max-w-md mx-auto py-6 mt-4">
      <input
        type="text"
        placeholder="Search for characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="w-full mt-2 p-2 bg-[#53ff11] text-black rounded"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
