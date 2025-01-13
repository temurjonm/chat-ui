import { gql, useMutation } from "@apollo/client";
import { User } from "../models/User";

export interface CreateUserInput {
  email: string;
  password: string;
}

interface CreateUserVariables {
  createUserInput: CreateUserInput;
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

const useCreateUser = () => {
  return useMutation<{ createUser: User }, CreateUserVariables>(CREATE_USER);
};

export default useCreateUser;
