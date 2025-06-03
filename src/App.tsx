import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import BrowsePlansPage from './pages/BrowsePlansPage';
import PlanDetailsPage from './pages/PlanDetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountPage from './pages/AccountPage';
import FAQPage from './pages/FAQPage';
import NdihmePage from './pages/NdihmePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="plans" element={<BrowsePlansPage />} />
        <Route path="plans/:id" element={<PlanDetailsPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="ndihme" element={<NdihmePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;