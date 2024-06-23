import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import satria from "../assets/img/Satriaa.png";

export const Angkut = () => {
  const [currentView, setCurrentView] = useState("pesanan");

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-screen my-12 ml-14 mr-14">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-3xl font-bold mb-4">Angkut</h1>
          <div className="flex flex-row justify-between text-xl font-semibold">
            <button
              onClick={() => handleButtonClick("pesanan")}
              className={`${
                currentView === "pesanan"
                  ? "underline underline-offset-8 text-font-hijau"
                  : ""
              }`}
            >
              Pesanan
            </button>
            <button
              onClick={() => handleButtonClick("dalam_proses")}
              className={`${
                currentView === "dalam_proses"
                  ? "underline underline-offset-8 text-font-hijau"
                  : ""
              }`}
            >
              Dalam Proses
            </button>
            <button
              onClick={() => handleButtonClick("riwayat")}
              className={`${
                currentView === "riwayat"
                  ? "underline underline-offset-8 text-font-hijau"
                  : ""
              }`}
            >
              Riwayat
            </button>
          </div>
          {currentView === "pesanan" && <PesananView />}
          {currentView === "dalam_proses" && <DalamProsesView />}
          {currentView === "riwayat" && <RiwayatView />}
        </div>
      </div>
    </div>
  );
};

const PesananView = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h3 className="text-lg">#2453800</h3>
        <div className="flex flex-row gap-10 text-xl">
          <img alt="satria" className="h-14 w-14" src={satria} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h3>Jl. Pesona No. 20</h3>
              <h3>14.33 WIB</h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-11 w-full">
                <h3>Rp.21.000</h3>
                <h3>7.0 KM</h3>
              </div>
              <button className="bg-hijau rounded-full px-10 py-2 text-white">
                Terima
              </button>
            </div>
          </div>
        </div>
        <hr className="border-b border-black " />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-lg">#245879</h3>
        <div className="flex flex-row gap-10 text-xl">
          <img alt="satria" className="h-14 w-14" src={satria} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h3>Jl.Medika Sari No. 76</h3>
              <h3>18.23 WIB</h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-11 w-full">
                <h3>Rp.18.000</h3>
                <h3>6.0 KM</h3>
              </div>
              <button className="bg-hijau rounded-full px-10 py-2 text-white">
                Terima
              </button>
            </div>
          </div>
        </div>
        <hr className="border-b border-black " />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-lg">#2454578</h3>
        <div className="flex flex-row gap-10 text-xl">
          <img alt="satria" className="h-14 w-14" src={satria} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h3>Jl. Permata Utama No. 7</h3>
              <h3>09.48 WIB</h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-11 w-full">
                <h3>Rp.50.000</h3>
                <h3>8.5 KM</h3>
              </div>
              <button className="bg-hijau rounded-full px-10 py-2 text-white">
                Terima
              </button>
            </div>
          </div>
        </div>
        <hr className="border-b border-black " />
      </div>
    </div>
  );
};

const DalamProsesView = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h3 className="text-lg">#2453800</h3>
        <div className="flex flex-row gap-10 text-xl">
          <img alt="satria" className="h-14 w-14" src={satria} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h3>Jl. Pesona No. 20</h3>
              <h3>14.33 WIB</h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-11 w-full">
                <h3>Rp.21.000</h3>
                <h3>7.0 KM</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl">Status: Satria menuju Lokasi</h3>
            <h3 className="text-xl">Estimasi Selesai: 14.20 WIB</h3>
            <a href="/" className="text-font-hijau text-xl font-semibold">
              Cek Posisi Satria
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-xl text-right">Satria: Heru</h3>
            <button className="bg-hijau rounded-full px-10 py-2 text-white">
              Terima
            </button>
          </div>
        </div>
        <hr className="border-b border-black " />
      </div>
      <div className="flex flex-col gap-6">
        <h3 className="text-lg">#2453800</h3>
        <div className="flex flex-row gap-10 text-xl">
          <img alt="satria" className="h-14 w-14" src={satria} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h3>Jl. Pesona No. 20</h3>
              <h3>14.33 WIB</h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-11 w-full">
                <h3>Rp.21.000</h3>
                <h3>7.0 KM</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl">Status: Satria menuju Lokasi</h3>
            <h3 className="text-xl">Estimasi Selesai: 14.20 WIB</h3>
            <a href="/" className="text-font-hijau text-xl font-semibold">
              Cek Posisi Satria
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-xl text-right">Satria: Heru</h3>
            <button className="bg-hijau rounded-full px-10 py-2 text-white">
              Terima
            </button>
          </div>
        </div>
        <hr className="border-b border-black " />
      </div>
    </div>
  );
};

const RiwayatView = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between">
        <h3 className="text-lg">#2453800</h3>
        <h3 className="text-lg">Satria: Agung</h3>
        </div>
        
        <div className="flex flex-row gap-10 text-xl">
          <img alt="satria" className="h-14 w-14" src={satria} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between">
              <h3>Jl. Pesona No. 20</h3>
              <h3>14.33 WIB</h3>
            </div>
            <div className="flex flex-row justify-between">
                <h3>Rp.21.000</h3>
              <button className="bg-hijau rounded-full px-10 py-2 text-white">
                Terima
              </button>
            </div>
          </div>
        </div>
        <hr className="border-b border-black " />
      </div>
      </div>
  );
};
