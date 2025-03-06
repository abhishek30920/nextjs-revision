import React from "react";

export default function ProductLayout({ children }:{children:React.ReactNode}) {
  return (
    <div>
      <h1>{children}</h1>
      <h2>Featured product</h2>
    </div>
  );
}
