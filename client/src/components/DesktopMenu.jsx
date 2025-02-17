import MenuItem from "./MenuItem";

const DesktopMenu = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <MenuItem href="#" label="Home" />
        </li>
        <li>
          <MenuItem href="#" label="Dashboard" />
        </li>
        <li>
          <MenuItem href="#" label="About" />
        </li>
        <li>
          <MenuItem href="#" label="Login" />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopMenu;
