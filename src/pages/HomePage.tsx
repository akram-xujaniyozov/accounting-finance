import React, { ReactNode } from "react";

import Sidebar from "../modules/Sidebar";
import Header from "../modules/Header";
import Main from "../modules/Main";

export default function HomePage(): ReactNode {
  return (
    <div className="flex items-top gap-10 bg-lightgray p-6">
      <div className="basis-1/4">
        <Sidebar />
      </div>
      <div className="flex flex-col grow gap-10">
        <Header />
        <Main />
      </div>
    </div>
  );
}
