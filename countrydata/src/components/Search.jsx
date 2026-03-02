
const Search = (props) => {

  
  return (
    <div className="flex justify-center p-4 dark:bg-gray-900">
      <input
        type="text"
        className="bg-gray-200 dark:bg-gray-700 dark:text-white w-100 px-3 py-2 outline-1 rounded-md border-0 focus:bg-gray-100 dark:focus:bg-gray-600 dark:placeholder-gray-400"
        placeholder="Search Country......"
        value={props.searchInput[0]}
        onChange={(e) => props.searchInput[1](e.target.value)}
      />
    </div>
  );
};

export default Search;
