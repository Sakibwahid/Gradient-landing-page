
import {Outlet} from "react-router-dom"
import Navbar from "../components/pages/Navbar";
const HomeLayout = () =>
{
    return(
        <>
        <div className="w-full h-screen bg-[#0e011a]">
        <header className="w-11/12 max-w-screen-xl mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="w-11/12 max-w-screen-xl my-auto mx-auto ">
            <Outlet></Outlet>
        </main>
        <footer className="bg-gray-200">
          
        </footer>
        </div>
    </>
    );
}
export default HomeLayout;