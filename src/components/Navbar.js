import React from "react";
import logo from "../assets/images/nav-logo.png";

// export function StickyNavbar() {
//     const [openNav, setOpenNav] = React.useState(false);

//     React.useEffect(() => {
//         window.addEventListener(
//         "resize",
//         () => window.innerWidth >= 960 && setOpenNav(false),
//     );
//     }, []);
// }

const NavBar = () => {
    return ( 
        <div className="top-2 relative flex justify-between items-center p-4 text-white mx-10">
            <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="h-12" />
            </div>
            <div>
                <button className="group relative h-9 w-40 overflow-hidden rounded-full border-2 border-white text-md shadow">
                    <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-white font-semibold group-hover:text-blue-500">Contact us</span>
                </button>
            </div>
        </div>
    );
}

export default NavBar;