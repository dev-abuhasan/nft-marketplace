import React from 'react';
import Loading from './components/ui-kits/loading/loading';
import Routings from './routes/route';
import { AppContext } from './services/context/app-context';

const App = () => {
  const { loading } = React.useContext(AppContext);
  return (
    <main id="nft_marketplace">
      {loading && <Loading />}
      <Routings />
    </main>
  );
};

export default App;
