import React from "react";
import logo from "./logo.svg";
import { Main } from "./components/Main";
import { WalletInstallation } from "./components/organism/WalletInstallation";
import { InfinityTower } from "./components/organism/InfinityTower/InfinityTower";
import { WalletConnect } from "./components/organism/WalletConnect";
import { useFloors } from "./hooks/Floors";
import { Rinkeby, useEthers } from "@usedapp/core";
import { useState } from "react";

import { Container, Header, Title } from "@mantine/core";

function App() {
  const { ethereum } = window as any;
  const { floors } = useFloors();

  return (
    <div className="App">
      <Header
        height={60}
        px="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title>Infinity Tower</Title>
        {/* Ensure connected to correct network: WalletConnect */}
        <WalletConnect />
      </Header>
      <Container p="lg">
        {/* If Wallet not detetcted run: WalletInstallation */}
        {!ethereum ? <WalletInstallation /> : <InfinityTower floors={floors} />}
      </Container>
    </div>
  );
}

export default App;
