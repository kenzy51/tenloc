import './styles/globals.css';
import { BannerWidget } from './widgets/mainPage/BannerWidget';
import { Blog } from './widgets/mainPage/Blog';
import { Excursion } from './widgets/mainPage/Excursion';
import { PopularNav } from './widgets/mainPage/PopularNav';
import { Subscribe } from './widgets/mainPage/Subscribe';
function App() {
  return (
  <div>
    <BannerWidget/>
    <PopularNav/>
    <Excursion/>
    <Blog/>
    <Subscribe/>
  </div>
  );
}




export default App;


