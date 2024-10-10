import { Helmet } from 'react-helmet-async';
import Logo from '@/assets/react.svg';
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
function App() {
  return (
    <>
      <Helmet>
        <title>Slash Admin</title>
        <link rel="icon" href={Logo} />
      </Helmet>
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading······</div>}
      />
    </>
  );
}

export default App;
