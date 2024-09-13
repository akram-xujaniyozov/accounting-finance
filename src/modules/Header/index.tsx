import React, { ReactNode } from "react";
import Form from "../../components/Form";
import Navigation from "../../components/Navigation";

export default function Header(): ReactNode {
  return (
    <div className="flex flex-col">
      <Navigation />
      <Form />
    </div>
  );
}
