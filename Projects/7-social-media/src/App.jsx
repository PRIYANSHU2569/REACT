import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';


function App() {
  

  return (
    <>
    <div className="app-container">
      <Header />
      <div className="content">
      <Sidebar />
      <Footer />
      </div>
    </div>
    </>
  )
}

export default App
