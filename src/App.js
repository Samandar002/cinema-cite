import './App.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';

function App() {
  console.log("hello");
  return (
    <div>
      <Header />
      <Main className='movis'/>
      <Footer />
     
    </div>
  );
}

export default App;
