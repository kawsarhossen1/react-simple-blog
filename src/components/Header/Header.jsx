import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex  justify-between items-center py-8 border-b-2 w-11/12 mx-auto">
      <h1 className="text-4xl font-bold">React simple vlog</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
