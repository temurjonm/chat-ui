import { Link } from "react-router-dom";
import Auth from "./Auth";
import MUILink from "@mui/material/Link";

const Login = () => {
  const handleSubmit = async (credentials: {
    email: string;
    password: string;
  }) => {
    console.log("Credentials:", credentials);
  };

  return (
    <Auth submitLabel="Login" onSubmit={handleSubmit}>
      <Link to="/signup" style={{ alignSelf: "center" }}>
        <MUILink>Signup</MUILink>
      </Link>
    </Auth>
  );
};

export default Login;
