import React, { useContext } from "react";
import Main from "./Main";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import AuthGuard from "../gardians/Auth.guard";
import { AuthenticationContext } from "../../contexts";

const Layout = ({ children }) => {
  const currentUser = useContext(AuthenticationContext);

  return (
    <>
      <AuthGuard>
        {/** ignore auth for now */}
        {currentUser || true ? (
          <>
            <SideBar className="md:flex hidden lg:w-80 w-28 rounded-r-3xl" />
            <Main>
              <TopBar />
              {children}
            </Main>
          </>
        ) : (
          children
        )}
      </AuthGuard>
    </>
  );
};

export default Layout;
