import { createContext } from "react";
import { UserAction } from "../reducers/authReducer";

interface AuthContextType {
  user: string;
  dispatch: React.Dispatch<UserAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
