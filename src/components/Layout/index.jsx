import React from "react";

export default function Layout({ children }) {
  return (
    <section>
      <header>Header</header>
      {children}
    </section>
  );
}
