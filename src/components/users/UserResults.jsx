import { useContext } from "react";
import Loader from "../layout/Loader";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import { useEffect } from "react";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-14 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <h1 className="text-6xl">Fetching users</h1>
        <Loader />
      </div>
    );
  }
}

export default UserResults;
