import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import sleep from "../layout/assets/sleepy-coder-icon.svg";
import yearly from "../layout/assets/yearly-contribution-icon.svg";
import best from "../layout/assets/best-streak-icon.svg";
import current from "../layout/assets/current-streak-icon.svg";

function UserItem({ user }) {
  const { login, avatar_url, userContributionData } = user;
  const { currentStreak, bestStreak, yearlyContributions } =
    userContributionData;
  return (
    <Link className="text-base-content" to={`/user/${login}`}>
      <div className="card shadow-md compact side bg-zinc-700 opacity-40 hover:opacity-100 w-96">
        <div className="flex-row space-x-1 card-body">
          <div className="avatar">
            <div className="rounded-full shadow w-20">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>

          <div>
            <h2 className="card-title ">{login}</h2>

            <div className=" flex justify-between bg-zinc-800 rounded bg-opacity-60 w-max">
              <div className="bg-zinc-800 pr-2 p-1 m-1 flex rounded">
                <img
                  src={currentStreak > 0 ? current : sleep}
                  alt="current-icon"
                  width={20}
                  className="mx-1"
                />
                <p className="text-2xl ml-1">{currentStreak}</p>
              </div>
              <div className="bg-zinc-800 pr-2 p-1 m-1 flex rounded">
                <img
                  src={best}
                  alt="current-icon"
                  width={20}
                  className="mx-1"
                />
                <p className="text-2xl ml-1">{bestStreak}</p>
              </div>
              <div className="bg-zinc-800 pr-2 p-1 m-1 flex rounded">
                <img
                  src={yearly}
                  alt="current-icon"
                  width={20}
                  className="mx-1"
                />
                <p className="text-2xl ml-1">{yearlyContributions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
