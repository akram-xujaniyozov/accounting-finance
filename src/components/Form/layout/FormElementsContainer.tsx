import React, { ReactNode } from "react";

type FormElementsContainerProps = {
  children: ReactNode;
  width: string | undefined;
  className: string;
};

export default function FormElementsContainer({
  children,
  width,
  className,
}: FormElementsContainerProps): ReactNode {
  return (
    <div className={className} style={{ width }}>
      {children}
    </div>
  );
}
