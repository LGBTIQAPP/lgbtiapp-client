import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { images } from "../lib/images";

const MobileSidebar = ({ closeSidebar }) => {
  return (
    <section className="bg-[#000000]/40 h-screen w-screen fixed top-0 left-0">
      <section className="bg-white max-w-[50%] p-4 h-full border-2">
        <section className="flex justify-between">
          <div className={clsx("flex items-center mb-8 ")}>
            <Link href="">
              <Image src={images.beeyouLogo} alt="Bee You Logo" />
            </Link>
          </div>
          <button onClick={() => closeSidebar()}>
            <Image src={images.xMarkIcon} alt="X Mark Icon" />
          </button>
        </section>
        <ul className="blue-gray-700">
          <li>
            <Link href="">Inicio</Link>
          </li>
          <li>
            <Link href="">Beneficios</Link>{" "}
          </li>
          <li>
            <Link href="">Iniciar sesión</Link>{" "}
          </li>
          <button className="mt-5 p-1 rounded-lg border-4 border-rose-500 ">
            Unete a Bee you+!
          </button>
        </ul>
      </section>
    </section>
  );
};
export default function Navbar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <>
      <nav
        className={clsx(
          "bg-[#ffffff]",
          "shadow-xl",
          "h-[60px]",
          "flex justify-between fixed top-0",
          "z-40",
          "w-full",
          "space-x-10 sppace-y-4  "
        )}
      >
        {isMobileSidebarOpen && <MobileSidebar closeSidebar={closeSidebar} />}
        <div className={clsx("flex items-center pl-6 ")}>
          <Link href="">
            <Image src={images.beeyouLogo} alt="Bee You Logo" />
          </Link>
        </div>
        <div className="flex items-center text-blue-gray-900 font-bold max-lg:hidden">
          <a className="m-6" href="">
            Inicio
          </a>
          <a className="m-6" href="">
            Beneficios
          </a>
          <a className="m-6" href="">
            Iniciar sesion
          </a>
          <button className="m-6 p-2 rounded-lg border-4 border-rose-500 ">
            {/* <Link href="">
              <Image src={images.joinIcon} alt="Join Icon" />
            </Link> */}
            Unete a Bee you+!
          </button>
        </div>
        <div
          className={clsx(
            "px-4",
            "cursor-pointer",
            "flex",
            "justify-end",
            "items-center",
            "lg:hidden"
          )}
          onClick={() => {
            setIsMobileSidebarOpen(true);
          }}
        >
          <Link href="">
            {/* <img src="/icon-menu-mobile.svg" alt="menu" /> */}
            <Image src={images.joinIcon} alt="Join Icon" />
          </Link>
        </div>
      </nav>
    </>
  );
}
