import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'
import './App.css';
import router from './Routes/Route/Route';


function App() {
  return (
    <div>
      <div className='max-w-[1440px] mx-auto'>
        <RouterProvider router={router} />
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
