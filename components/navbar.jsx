import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem
} from "@heroui/navbar";
import NextLink from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";


export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"]
})


export const Navbar = () => {
  const navItems = ["BROWSE CATEGORIES", "PRODUCTS", "BLOG", "CONTACT"]
  const searchInput = (
    <CiSearch className="text-base text-[#303030]" />
  );

  return (
    <HeroUINavbar className={`${montserrat.className} bg-white`} maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start" >
        <NavbarBrand as="li" className="gap-3 min-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={"mainLogo.svg"} alt="iamge" width={183} height={24} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 text-[#303030] text-base font-semibold leading-7">
          {navItems.map((item, index) => (
            <Link href={index === 0 ? "/" : index === 1 ? "/products" : index === 2 ? "/" : index === 3 ? "/" : ""} key={index}>
              {item}
            </Link>
          ))}
        </ul>
      </NavbarContent >

      <NavbarContent className="hidden lg:flex basis-1/5 sm:basis-full" justify="end" >
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <FaRegUser className="text-[#303030]" />
            <span className="text-[#303030] text-base font-semibold leading-7">SIGN IN</span>
          </div>
          <div className="border-x px-4 border-[#303030]">
            <IoMdCart className="text-[#303030]" />
          </div>
          <div>{searchInput}</div>
        </div>
      </NavbarContent>


      <NavbarMenuToggle className="text-black lg:hidden" />

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item, index) => (
            <NavbarItem className="flex flex-col! gap-x-[20px]!" key={index}>
              {item}
            </NavbarItem>
          ))}
          <div className="flex items-center gap-5 pt-[20px]">
            <div className="flex items-center gap-4">
              <FaRegUser />
              <span className="text-base font-semibold leading-7">SIGN IN</span>
            </div>
            <div className="border-x px-4">
              <IoMdCart />
            </div>
            <CiSearch className="text-white" />
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar >
  );
};
