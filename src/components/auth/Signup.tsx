import { Link } from "react-router-dom";
import Auth from "./Auth";
import MUILink from "@mui/material/Link";
import useCreateUser, { CreateUserInput } from "../../hooks/useCreateUser";

const Signup = () => {
  const [createUser] = useCreateUser();

  const handleSubmit = async (credentials: CreateUserInput) => {
    await createUser({
      variables: {
        createUserInput: credentials,
      },
    });
  };

  return (
    <Auth submitLabel="Signup" onSubmit={handleSubmit}>
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default Signup;
