import { createContext } from "react";
import { UserAction } from "./AuthProvider";
 
interface AuthContextType {
  user: string;
  dispatch: React.Dispatch<UserAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
