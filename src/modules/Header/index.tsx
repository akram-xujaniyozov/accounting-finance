import React, { ReactNode } from "react";

import HeaderButtons from "../../components/HeaderButtons";
import HeaderTags from "../../components/HeaderTags";

export default function Header(): ReactNode {
  return (
    <div className="flex">
      <div className="flex items-center justify-between basis-4/5 bg-white px-4 py-2 rounded-2xl">
        <HeaderTags />
        <HeaderButtons />
      </div>
    </div>
  );
}
