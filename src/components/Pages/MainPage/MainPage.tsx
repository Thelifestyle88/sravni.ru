import { useAppSelector } from '../../..';
import UserCard from '../../UserCard/UserCard';
import styles from './styles/mainPage.module.scss';

function MainPage() {
  const isPageOnLoading = useAppSelector((store) => store.getAllUsersReducer.allUsersRequest);
  const users = useAppSelector((store) => store.getAllUsersReducer.usersData);

  if (isPageOnLoading) {
    return <p>Loading...</p>;
  }
  return (
    <main className={styles.mainPageWrapper}>
      {users.map((obj) => {
        return <UserCard key={obj.id} user={obj} />;
      })}
    </main>
  );
}

export default MainPage;
