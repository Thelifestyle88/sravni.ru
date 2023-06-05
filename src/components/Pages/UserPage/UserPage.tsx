import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../..';
import { useState } from 'react';

function UserPage() {
  const allPhotos = useAppSelector((store) => store.getAllPhotosReducer.photosData);
  const navigate = useNavigate();
  const userId = useParams();
  const [count, setCount] = useState(0);
  const photos = allPhotos.filter((item) => item.albumId === Number(userId.userId));
  const photosOnPage = photos.splice(count, 10);
  if (Number(userId.userId) < 1 || Number(userId.userId) > 10) {
    return <p>Нет данных</p>;
  }
  return (
    <>
      {photos && (
        <div>
          {photosOnPage.map((item) => {
            return <img key={item.id} src={item.url} alt={item.title} />;
          })}
        </div>
      )}
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
        }}>
        Следующий user
      </button>
      <button
        onClick={() => {
          navigate(`/user/${Number(userId.userId) - 1}`);
        }}>
        Предыдущий user
      </button>
    </>
  );
}
export default UserPage;
