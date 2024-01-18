import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import AccountsPage from './page/AccountsPage';
import CampaignsPage from './page/CampaignsPage';
import ProfilePage from './page/ProfilePage';
import Layout from './components/Layout/Layout';
import MainPage from './page/MainPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/account' element={<AccountsPage />} />
        <Route path='/account/:accountId' element={<ProfilePage />} />
        <Route path='/account/:accountId/:profileId' element={<CampaignsPage />} />
      </Route>
    </Routes>
  )
}

export default App
