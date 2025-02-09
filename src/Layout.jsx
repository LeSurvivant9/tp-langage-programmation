import { NavLink, Outlet } from "react-router";

function createNavLink({ to, name }) {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "active" : "")}>
      {name}
    </NavLink>
  );
}

export default function Layout() {
  const routes = [
    { to: "/", name: "Accueil" },
    { to: "/todos", name: "ToDo" },
    { to: "/weather", name: "Météo" },
  ];
  return (
    <>
      <header>
        <nav className={"flex flex-row gap-x-4 m-3 justify-center"}>
          {routes.map(createNavLink)}
        </nav>
      </header>
      <Outlet />
    </>
  );
}
