
/* Components */
import Loader from './components/Loader';
import Header from './components/Header';
import Footer from './components/Footer';

import Content from './components/Content';
/* Components */

function App() {
    return (
        <div className="App">

             <Header />

             <Content />

             <Footer
             title= 'Finisare - Digital Media Agency'
             subtitle = 'Sakarya Web Tasarım'
             />

        </div>
    );
}

export default App;
