import React from "react";
import Api from "./components/api/Api";

export default function App() {
  const objeto = [
    {
      nome: "Carolina Santiaga",
      id: 196,
    },
    {
      nome: "Douglas Welber",
      id: 123,
    },
    {
      nome: "Marcos Bilobram",
      id: 156,
    },
  ];

  return (
    <div>
      <h1>ESTUDO SOBRE USE-EFFECTS</h1>
      <Api />
    </div>
  );
}
