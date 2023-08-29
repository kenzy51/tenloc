import './styles/globals.css';
import { BannerWidget } from './widgets/mainPage/BannerWidget';
import { Excursion } from './widgets/mainPage/Excursion';
import { PopularNav } from './widgets/mainPage/PopularNav';
function App() {
  return (
  <div>
    <BannerWidget/>
    <PopularNav/>
    <Excursion/>
  </div>
  );
}




export default App;


