import { useHistory } from "react-router-dom";
import { Carousel } from '3d-react-carousal';
import Footericon from './Footericon'
import shoe1 from '../Assets/image/imghome1.png'
import shoe2 from '../Assets/image/imghome2.png'
import shoe3 from '../Assets/image/imghome3.png'
const Home = () => {

   let history = useHistory();
   let token = sessionStorage.getItem('jwt');
   if (token === null || token === undefined) {
      history.push("/login");
   }
   let slides = [
      <img src={shoe1} alt="1" />,
      <img src={shoe2} alt="2" />,
      <img src={shoe3} alt="3" />,
   ];


   return (
      <div id="caroussel">

         <Carousel id="gvsdfc" slides={slides} />


      
      </div >
   )
}

export default Home;