import { Link, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div>
        <Link style={{ marginRight: "5px" }} to={"/"}>
          Home
        </Link>
        <Link style={{ marginRight: "5px" }} to={"/contact"}>
          Contact
        </Link>

        <Link to={"/data"}>Data</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
