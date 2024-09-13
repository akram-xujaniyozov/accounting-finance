import React, { ReactNode } from "react";

import SidebarPage from "../modules/Sidebar";
import HeaderPage from "../modules/Header";
import MainPage from "../modules/Main";

export default function HomePage(): ReactNode {
  return (
    <div className="flex items-top gap-10 bg-lightgray h-screen p-6">
      <div className="basis-1/4">
        <SidebarPage />
      </div>
      <div className="flex flex-col grow">
        <HeaderPage />
        <MainPage />
      </div>
    </div>
  );
}
