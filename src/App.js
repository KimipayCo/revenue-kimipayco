import './App.css';
import HeroSection from './components/landing_page/hero_section/HeroSection';
import Footer from './components/Footer';
import UserAccounts from './components/landing_page/user_accounts/UserAccounts';

function App() {
  return (
    <div className="App bg-white">
      <HeroSection />
      <UserAccounts />
      <Footer />
    </div>
  );
}

export default App;
