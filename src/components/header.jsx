import { Link } from "react-router-dom";
import { HeaderContainer } from "../styles/headerStyle";

const Header = ({ setAuthentication }) => {
  const token = window.localStorage.getItem("authToken");

  return (
    <>
      {token ? (
        <HeaderContainer>
          <div>
            <Link to="/users">Students</Link>
          </div>
          <div>
            <Link
              onClick={() => {
                setAuthentication(false);
                window.localStorage.clear();
              }}
              to="/"
            >
              Logout
            </Link>
          </div>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <div>
            <Link to="/register">New User</Link>
          </div>
          <div>
            <Link to="/">Login</Link>
          </div>
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
