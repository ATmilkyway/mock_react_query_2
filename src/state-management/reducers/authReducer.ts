import React from "react";

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
export default authReducer;
