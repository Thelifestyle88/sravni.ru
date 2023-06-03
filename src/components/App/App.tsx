import { useEffect } from 'react';
import { useAppDispatch } from '../..';
import { getAllUsers } from '../../services/actions/getAllUsers';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/user/:userID" />
      </Routes>
    </>
  );
}

export default App;
