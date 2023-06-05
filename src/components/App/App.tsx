import { useEffect } from 'react';
import { useAppDispatch } from '../..';
import { getAllUsers } from '../../services/actions/getAllUsers';
import { getAllPhotos } from '../../services/actions/getAllPhotos';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import UserPage from '../Pages/UserPage/UserPage';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPhotos());
  });
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="user/:userId" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
