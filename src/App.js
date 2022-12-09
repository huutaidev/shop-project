
import './App.css';
import Head from './components/Layout/Head'
import Slider from './components/Layout/Slider'
import MenuLeft from './components/Layout/MenuLeft'
import Footer from './components/Layout/Footer'

  function App(props) {
    return (
      <>
        <Head />
            <Slider />
            <section>
                <div className="container">
                    <div className="row">
                        <MenuLeft />
                        {props.children}
                    </div>
                </div>
            </section>
            <Footer />
      </>
    );
  }

export default App;
