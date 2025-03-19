import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {
  const getStyles = ({ isActive }) => {
    return isActive
      ? "bg-sky-700 ... hover:bg-sky-800  "
      : "flex align-center gap-1 hover:bg-sky-500";
  };
  return (
    <aside className="flex flex-col gap-3 border-r-2 w-[150px] border-gray-100 w-24 h-screen p-3 ">
      <NavLink to="/" className={getStyles}>
        <span class="material-symbols-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/archieve" className={getStyles}>
        <span class="material-symbols-outlined">archive</span>
        <span>Archieve</span>
      </NavLink>
      <NavLink to="/important" className={getStyles}>
        <span class="material-symbols-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink to="/bin" className={getStyles}>
        <span class="material-symbols-outlined">delete</span>
        <span>Delete</span>
      </NavLink>
    </aside>
  );
};
