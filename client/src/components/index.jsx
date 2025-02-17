import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DesktopMenu from "./DesktopMenu";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-600 text-white py-4 px-6 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <SearchBar />
        <DesktopMenu />
      </div>
    </header>
  );
};

export default Header;
