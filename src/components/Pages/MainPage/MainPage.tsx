import { useAppSelector } from '../../..';
import UserCard from '../../UserCard/UserCard';

function MainPage() {
  const isPageOnLoading = useAppSelector((store) => store.getAllUsersReducer.allUsersRequest);
  const users = useAppSelector((store) => store.getAllUsersReducer.usersData);
  console.log(users);

  if (isPageOnLoading) {
    return <p>Loading...</p>;
  }
  return (
    <main>
      <div>
        {users.map((obj) => {
          return <UserCard key={obj.id} user={obj} />;
        })}
      </div>
    </main>
  );
}

export default MainPage;
