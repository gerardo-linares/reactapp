import React from 'react';
import { Link } from 'react-router-dom';
import { RiInstagramLine, RiFacebookLine, RiTwitterLine, RiWhatsappLine, RiMailLine, RiTimeLine, RiHomeLine, RiPhoneLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-primary p-8 xl:p-20 container mx-auto mt-1 rounded-t-3xl px-10 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b bg-primary border-gray-100 pb-8">

        <div className=" bg-primary">
          <Link to="/" className="text-2xl font-bold p-1 bg-primary  text-white">
            unaCosa3D <span className="text-white text-5xl bg-primary text-center md:text-left"></span>
          </Link>
        </div>
        <nav className="flex items-center gap-4 bg-primary">
          <Link to="#" className="block text-primary p-4 bg-white text-xl rounded-full">
            <RiInstagramLine className="bg-white" />
          </Link>
          <Link to="#" className="block text-primary p-4 bg-white text-xl rounded-full">
            <RiFacebookLine className="bg-white" />
          </Link>
          <Link to="#" className="block text-primary p-4 bg-white text-xl rounded-full">
            <RiTwitterLine className="bg-white" />
          </Link>
          <Link to="#" className="block text-primary p-4 bg-white text-xl rounded-full">
            <RiWhatsappLine className="bg-white" />
          </Link>
        </nav>
      </div>
      <div className="mt-8 bg-primary">
        <h3 className="text-lg font-bold bg-primary text-white text-center md:text-left">Madrid</h3>
        <nav className="mt-4 flex flex-col md:flex-row  bg-primary items-center text-center md:text-left justify-between gap-4 ">
          <div className="text-gray-100 mt-4 bg-primary hover:text-white transition-color border-b border-gray-100 pb-8 md:border-none">
            <Link to="#" className="flex items-center  mb-3">
              <RiMailLine className="inline-block align-middle mr-2 text-xl" />
              <p>unacosa3d@gmail.com</p>
            </Link>
            <Link to="#" className="flex items-center mb-3">
              <RiPhoneLine className="inline-block align-middle mr-2 text-xl" />
              <p>011 1133223323</p>
            </Link>
            <Link to="#" className="flex items-center mb-3">
              <RiHomeLine className="inline-block align-middle mr-2 text-xl" />
              <p>
                Una Calle 7123, Buenos Aires CP:2820
              </p>
            </Link>
            <Link to="#" className="flex items-center mb-2">
              <RiTimeLine className="inline-block align-middle mr-2 text-xl" />
              <p>
                Lunes a viernes 10 a 14hs y 17 a 20hs
              </p>
            </Link>
          </div>
          <Link to="/" className="text-gray-100 mt-4 bg-primary hover:text-white transition-color">
            Inicio
          </Link>
          <Link to="#" className="text-gray-100 mt-4 bg-primary hover:text-white transition-color">
            Productos
          </Link>
          <Link to="#" className="text-gray-100 mt-4 bg-primary hover:text-white transition-color">
            Nosotros
          </Link>
          <button className="font-semibold py-2 px-6 mt-4 bg-white text-primary rounded-xl">Contacto</button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-100 text-center bg-primary">©GLinares 2023 - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
