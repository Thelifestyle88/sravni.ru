import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppDispatch } from '../../index';
import { getAllUsers } from '../../services/actions/getAllUsers';

import MainPage from '../Pages/MainPage/MainPage';
import UserPage from '../Pages/UserPage/UserPage';
import AppHeader from '../AppHeader/AppHeader';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
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
