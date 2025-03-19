import logo from "../../assets/notes.jpeg";
export const Navbar = () => {
  return (
    <header className='flex gap-2 border-b-2 border-blue-400 px-3 py-1' >
      <div className="w-12 h-12" >
        <img src={logo} className="w-full h-full" alt="logo"></img>
      </div>
      <h1 className="text-3xl font-bold">Notes App</h1>
    </header>
  );
};
