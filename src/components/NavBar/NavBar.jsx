import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";


const NavBar = () => {

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Blog', path: '/blog' }
    ];

    const [open, setOpen] = useState(false);

    return (

        <nav className="m-4 md:m-0 ">

            <div className=" md:hidden text-2xl ml-4" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <IoClose /> : <RiMenu2Fill/>
                }

            </div>

            <ul className={`md:flex justify-center items-center gap-6 absolute md:static duration-1000 bg-gray-100 p-2
             ${ open ? 'top-10' : '-top-32' } `}>
            
                {
                    routes.map(route =>
                        <Link
                            key={route.id}
                            route={route}
                        ></Link>
                    )
                }
            </ul>
        </nav>

    );
};

export default NavBar;