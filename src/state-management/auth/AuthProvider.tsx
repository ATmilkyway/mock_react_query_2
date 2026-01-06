import { ReactNode, useReducer } from "react";

import AuthContext from "./authContext";

interface LoginUser {
  type: "LOGIN";
  userName: string;
}

interface LogoutUser {
  type: "LOGOUT";
}

export type UserAction = LoginUser | LogoutUser;

const authReducer = (user: string, action: UserAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.userName;
    case "LOGOUT":
      return "";
  }
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
