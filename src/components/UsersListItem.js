import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpendablePanel";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button loading={isLoading} onClick={handleClick} className="mr-3">
        <GoTrashcan />
      </Button>
      {error && <div>Error deletiing user.</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT!!!</ExpandablePanel>;
}

export default UsersListItem;
