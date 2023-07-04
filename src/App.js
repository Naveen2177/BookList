import ChangeColor from './examples/changeColor';
import Booklist from './components/booklist'
import ShirtItems from './components/shirtItems';
import Navbar from './pages/navbar';
import Linklist from './components/linklist'
import {products} from './data/products'
function App() {
  return (
    <div className='sm md lg'style={{display:'flex', flexDirection:'column',gap:'100px'}}>
      <Navbar/>
      <Booklist/>
      <ShirtItems/>
      <Linklist products={products}/>

      <ChangeColor/>
    </div>
  );
}

export default App;
