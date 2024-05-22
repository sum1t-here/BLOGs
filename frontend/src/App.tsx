import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blogs, Signup } from './pages/index';
import { Signin } from './pages/index';
import { Blog } from './pages/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
