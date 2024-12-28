import { useContext } from "react";
import Profile from "./Profile";
import { UserContext } from "./User";

export default function UserProfile() {
  const { changeAge } = useContext(UserContext);

  return (
    <div className="container">
      <Profile />
      <button onClick={changeAge}>Change here</button>
    </div>
  );
}
