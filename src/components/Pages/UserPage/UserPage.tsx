import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserPhotos } from '../../../services/actions/getUserPhotos';

import { useAppDispatch, useAppSelector } from '../../../index';
import styles from './styles/userPage.module.scss';
import { getUserInformation } from '../../../services/actions/getUser';

type TIdParams = {
  userId: string;
};

function UserPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { userId } = useParams<keyof TIdParams>() as TIdParams;
  useEffect(() => {
    dispatch(getUserPhotos(userId.toString()));
    dispatch(getUserInformation(userId.toString()));
  }, [userId]);
  const user = useAppSelector((store) => store.getUserReducer.userData);
  const userPhotos = useAppSelector((store) => store.getUserPhotosReducer.photosData);
  const isLoading = useAppSelector((store) => store.getUserPhotosReducer.userPhotosRequest);

  const [count, setCount] = useState(0);
  const photos = userPhotos.filter((item) => item.albumId === Number(userId));
  const photosOnPage = photos.splice(count, 10);

  if (isLoading) {
    return <p>Загрузка...</p>;
  } else if (!user) {
    return <p>Нет данных</p>;
  }
  return (
    <section className={styles.userPageWrapper}>
      {user && (
        <>
          <h1 className={styles.userName}>{user.name}</h1>
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
              className={styles.button}
              onClick={() => {
                navigate(`/user/${Number(userId) - 1}`);
                setCount(0);
              }}>
              Предыдущий user
            </button>
            <div className={styles.buttonImages}>
              <button
                className={styles.button}
                onClick={() => {
                  if (count === 0) {
                    setCount(0);
                  } else setCount(count - 10);
                }}>
                Назад
              </button>
              <button
                className={styles.button}
                onClick={() => {
                  if (count === 40) {
                    setCount(40);
                  } else setCount(count + 10);
                }}>
                Вперёд
              </button>
            </div>
            <button
              className={styles.button}
              onClick={() => {
                navigate(`/user/${Number(userId) + 1}`);
                setCount(0);
              }}>
              Следующий user
            </button>
          </div>
        </>
      )}
    </section>
  );
}
export default UserPage;
