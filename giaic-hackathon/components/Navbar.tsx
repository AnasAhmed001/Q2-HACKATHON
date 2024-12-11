import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around">
        <div className="flex justify-around gap-6">
          <h1 className="text-[34px] font-bold mr-6">HEKTO</h1>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink></NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ul className="flex flex-row gap-6 items-center">
            <li>Pages</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="p-3 flex">
          <Input type="email" />
          <CiSearch className="bg-[#FB2E86] h-[40px] w-[51px] text-white text-[10px]" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
