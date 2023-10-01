import styles from "./App.module.css";
import NavBar from './components/NavBar/NavBar';
import Hero from "./components/Hero/Hero";
import Introduction from './components/Introduction/Introduction';
import CardSection from './components/CardSection/CardSection';
import Practices from "./components/Practices/Practices";
import Clients from "./components/Clients/Clients";

function App() {
  return (
    <>
    <div className={styles.wrapper}>
      <NavBar />
      <Hero />
      </div>
    <div className={styles.bodyWrapper}>
      <Introduction />
      <CardSection />
      <Practices />
      <Clients />
    </div>
    </>
  );
}

export default App;
