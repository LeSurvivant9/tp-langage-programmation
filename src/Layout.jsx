import { NavLink, Outlet } from "react-router";

function createNavLink({ to, name }) {
  return (
    <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
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
        <nav className={"flex flex-row gap-x-4 p-3 text-white justify-center bg-blue-500"}>
          {routes.map(createNavLink)}
        </nav>
      </header>
      <main id={"main-container"} className={"m-4"}>
      <Outlet />
      </main>
    </>
  );
}
