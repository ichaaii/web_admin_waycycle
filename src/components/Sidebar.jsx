import React from 'react'
import { Card, List, ListItem } from "@material-tailwind/react";
import logo1 from "../assets/img/logo.png";
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
      <Card className="h-screen w-full max-w-[25rem] ml-0 p-4 bg-hijau shadow-xl shadow-blue-gray-900/5 font-custom flex flex-col">
          <div className="mb-2 flex items-center gap-4 p-4 ">
            <img alt="logo" className="h-14 w-14 bg-white p-3 rounded-full" src={logo1} />
            <div className="flex flex-col text-putih">
                <h2 className="text-xl font-semibold">Icha</h2>
                <h2 className="text-xl">Admin</h2>
            </div>
          </div>
          
          <List className="text-putih text-xl font-custom flex-grow">
          <NavLink to="/input" className={({ isActive }) => isActive ? 'bg-putih rounded-lg text-black' : ''}>
          <ListItem as="div">Input Daur Ulang</ListItem>
        </NavLink>
        <NavLink to="/angkut" className={({ isActive }) => isActive ? 'bg-putih rounded-lg text-black' : ''}>
          <ListItem as="div">Angkut</ListItem>
        </NavLink>
        <NavLink to="/riwayat" className={({ isActive }) => isActive ? 'bg-putih rounded-lg text-black' : ''}>
          <ListItem as="div">Riwayat transaksi</ListItem>
        </NavLink>
        <NavLink to="/rekap" className={({ isActive }) => isActive ? 'bg-putih rounded-lg text-black' : ''}>
          <ListItem as="div">Rekapitulasi</ListItem>
        </NavLink>
          </List>
          <div className="mb-2 flex items-center p-4 ">
            <a href='/' className="text-xl text-putih">Keluar akun</a>
            <button ></button>
         </div>
        </Card>
      );
}
