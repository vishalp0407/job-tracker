import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const SearchBar = () => {
  return (
    <div className=" relative hidden lg:block  ">
      <MagnifyingGlassIcon className=" absolute left-3 top-3 h-4 w-4 text-slate-400" />
      <input
        type="text"
        placeholder="Search..."
        className="px-8 py-2  rounded-md bg-white text-black font-semibold border-amber-50 w-170 outline-amber-50 "
      />
    </div>
  );
};

export default SearchBar;
