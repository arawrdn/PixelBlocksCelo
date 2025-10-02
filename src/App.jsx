import React, { useState } from "react";
import Header from "./components/Header";
import WalletConnect from "./components/WalletConnect";
import CanvasGrid from "./components/CanvasGrid";
import PixelInfo from "./components/PixelInfo";

export default function App() {
  const [wallet, setWallet] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <Header />
      <WalletConnect onConnect={setWallet} />
      {wallet && <CanvasGrid wallet={wallet} />}
      <PixelInfo />
    </div>
  );
}
