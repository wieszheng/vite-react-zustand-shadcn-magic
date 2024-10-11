import { Helmet } from 'react-helmet-async';
import Logo from '@/assets/react.svg';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider } from 'react-router-dom';
import router from '@/router';
function App() {
  const queryClient = new QueryClient()

  
  return (

    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Slash Admin</title>
        <link rel="icon" href={Logo} />
      </Helmet>
      <RouterProvider
        router={router}
        fallbackElement={<div>Loading······</div>}
      />
    </QueryClientProvider>
  );
}

export default App;
