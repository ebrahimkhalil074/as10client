import BestSells from "../BestSells";
import Categories from "../Categouries";
import Discount from "../Discount";
import Slider from "../Slider";

const Home = () => {
    return (
        <div className="space-y-6">
         <Slider img={'https://i.ibb.co/N1gvRbm/Samsung.jpg'}img1={"https://i.ibb.co/dLxcz1r/maxresdefault-1.jpg"} img2={"https://i.ibb.co/N6qXYhc/images-1.jpg"} img3={"https://i.ibb.co/8XkF61X/metallic-vivo-logo-dark-y4ti2whe3w5sk4rj.jpg"} img4={"https://i.ibb.co/M81zVVF/ey-Jid-WNr-ZXQi-Oi-Jw-YS1j-ZG4i-LCJr-ZXki-Oi-J1c-Gxv-YWRc-L05ld3-Nc-L0lt-YWdl-XC8y-MDIz-Xz-Ay-XC9za.jpg"} img5={"https://i.ibb.co/Byc4Lxg/download-11.jpg"}></Slider> 
           <Categories></Categories>
           <Discount></Discount>
           <BestSells></BestSells>
        </div>
    );
};

export default Home;