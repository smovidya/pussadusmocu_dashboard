import React from "react";
import { Home, ShoppingCart} from "lucide-react";


export const Navbar: React.FC = () => {

    return (
        <div className="inline-flex h-24 w-full items-center justify-between bg-yellow01 px-5 py-1.5">

            <div>
                <a href="/users/home" className="items-center justify-center hover:cursor-pointer">
                    <img className="inline h-[88px] w-[88px]" src="/yellowBox.svg" alt="box"></img>
                </a>
            </div>

            
        </div>
    );
};