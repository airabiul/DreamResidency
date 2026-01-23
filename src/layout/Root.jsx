import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";


const Root = () => {
    return (
        <div className="w-[1300px] mx-auto ">
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Root;