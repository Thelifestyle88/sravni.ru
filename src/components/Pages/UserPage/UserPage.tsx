import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import { useAppSelector } from '../../../index';
import styles from './styles/userPage.module.scss';

function UserPage() {
  const navigate = useNavigate();
  const userId = useParams();

  const allUsers = useAppSelector((store) => store.getAllUsersReducer.usersData);
  const allPhotos = useAppSelector((store) => store.getAllPhotosReducer.photosData);

  const [count, setCount] = useState(0);
  const user = allUsers.find((item) => item.id === Number(userId.userId));
  const photos = allPhotos.filter((item) => item.albumId === Number(userId.userId));
  const photosOnPage = photos.splice(count, 10);

  if (Number(userId.userId) < 1 || Number(userId.userId) > 10) {
    return <p>Нет данных</p>;
  }

  return (
    <section className={styles.userPageWrapper}>
      <h1>{user?.name}</h1>
      <div className={styles.photosWrapper}>
        {photos &&
          photosOnPage.map((item) => {
            return (
              <figure className={styles.figure} key={item.id}>
                <img className={styles.image} src={item.url} alt={item.title} />
                <figcaption className={styles.caption}>{item.id}</figcaption>
              </figure>
            );
          })}
      </div>

      <div className={styles.buttonsWrapper}>
        <button
          onClick={() => {
            navigate(`/user/${Number(userId.userId) - 1}`);
            setCount(0);
          }}>
          Предыдущий user
        </button>
        <button
          onClick={() => {
            if (count === 0) {
              setCount(0);
            } else setCount(count - 10);
          }}>
          Назад
        </button>
        <button
          onClick={() => {
            if (count === 40) {
              setCount(40);
            } else setCount(count + 10);
          }}>
          Вперёд
        </button>
        <button
          onClick={() => {
            navigate(`/user/${Number(userId.userId) + 1}`);
            setCount(0);
          }}>
          Следующий user
        </button>
      </div>
    </section>
  );
}
export default UserPage;
