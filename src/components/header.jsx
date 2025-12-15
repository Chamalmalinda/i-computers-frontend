import { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { LuListCollapse } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import UserData from "./userData";

export function Header(){
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return(
        <header className="w-full h-[100px] bg-accent flex relative">
            <LuListCollapse  onClick={()=>{setSideBarOpen(true)}}className="text-white my-auto text-2xl ml-6 lg:hidden" />
            <img src="/logo.png" className="h-full" alt="logo"/>

            <div className="w-full h-full hidden lg:flex text-xl text-primary justify-center items-center gap-[30px]">
                <Link to="/" className={`relative pb-2 transition-colors ${isActive('/') ? 'text-white' : ''}`}>
                    Home
                    {isActive('/') && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-t-full"></div>}
                </Link>
                <Link to="/products" className={`relative pb-2 transition-colors ${isActive('/products') ? 'text-white' : ''}`}>
                    Products
                    {isActive('/products') && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-t-full"></div>}
                </Link>
                <Link to="/about" className={`relative pb-2 transition-colors ${isActive('/about') ? 'text-white' : ''}`}>
                    About
                    {isActive('/about') && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-t-full"></div>}
                </Link>
                <Link to="/contacts" className={`relative pb-2 transition-colors ${isActive('/contacts') ? 'text-white' : ''}`}>
                    Contacts
                    {isActive('/contacts') && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-t-full"></div>}
                </Link>

            </div>
            <div className="absolute right-24 top-0 h-full  items-center hidden lg:flex">
				<UserData />
			</div>
            
            <Link to="/cart" className="absolute right-4 top-1/2 -transale-y-1/2 text-primary text-2xl">
             <BiShoppingBag/>
             </Link>
             {sideBarOpen&&<div className="fixed lg:hidden w-[100vw] h-screen top-0 left-0 bg-black/50 z-20 transition-all duration-300">
             
              <div className="w-[250px] h-screen flex-col border-2 relative">

                <div className="absolute w-full h-full bg-white left-[-250px] translate-x-[250px] transition-transform duration-1000 flex flex-col">
                    <div className="w-full h-[100px] bg-accent flex justify-center items-center">
                        <img src="logo.png" className="h-full" alt="logo"/>
                        <LuListCollapse 
                        onClick={()=>{
                            setSideBarOpen(false)}} 
                            
                        className="text-white my-auto text-2xl ml-6 lg:hidden rotate-180"
                        
                        />

                    </div>
                    <div className="w-full h-full flex flex-col text-xl text-secondary justify-start items-start  gap-6 mt-10 pl-6">
								<a
									className={`relative pb-2 transition-colors ${isActive('/') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'hover:text-secondary'}`}
									href="/"
									onClick={() => setSideBarOpen(false)}
								>
									Home
								</a>
								<a
									className={`relative pb-2 transition-colors ${isActive('/products') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'hover:text-secondary'}`}
									href="/products"
									onClick={() => setSideBarOpen(false)}
								>
									Products
								</a>
								<a
									className={`relative pb-2 transition-colors ${isActive('/about') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'hover:text-secondary'}`}
									href="/about"
									onClick={() => setSideBarOpen(false)}
								>
									About
								</a>
                                <a
									className={`relative pb-2 transition-colors ${isActive('/contacts') ? 'text-secondary font-semibold border-b-2 border-secondary' : 'hover:text-secondary'}`}
									href="/contacts"
									onClick={() => setSideBarOpen(false)}
								>
									Contact
								</a>
                                <div className="flex justify-center items-center bg-accent/50 backdrop:blur-2xl-md px-4 py-2 rounded-full shadow-lg hover:bg-accent transition-all duration-300">
								<UserData />
								</div>


                    </div>

                </div>

              </div>

             </div>}

    
        </header>
    )
}