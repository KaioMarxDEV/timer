import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';

function App() {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="my-20 mx-40 h-full max-h-[46rem] w-full max-w-6xl rounded-lg bg-gray-700">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
