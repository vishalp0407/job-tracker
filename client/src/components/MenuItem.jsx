const MenuItem = ({ url, label }) => {
  return (
    <a href={url} className="hover:text-blue-300 cursor-pointer">
      {label}
    </a>
  );
};

export default MenuItem;
