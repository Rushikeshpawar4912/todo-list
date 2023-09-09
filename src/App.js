import './App.css';

import Navbar from './COMPONENTS/Navbar';
import Footer from './COMPONENTS/Footer';
import TODO from './COMPONENTS/Tosos.js';
import Todos from './COMPONENTS/TodoItem';

function App() {
  let todos =[
    {
      sno:1,
      title:"go to the market ",
      desc:"you need to go to the market"
    },
    {
      sno:1,
      title:"go to the college ",
      desc:"you need to go to the college"
    },
    {
      sno:1,
      title:"go to the school ",
      desc:"you need to go to the school"
    },
   ]
  return (
    <>
<Navbar title="mytodo" searchbar={true}/>
<Footer/>
<TODO/>
<Todos/>
</>
  );
}

export default App;
