import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../content/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;