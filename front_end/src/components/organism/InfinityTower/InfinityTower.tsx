import { useState } from "react";
import { Button, Card, Grid, Text } from "@mantine/core";
import { Goerli, useEthers } from "@usedapp/core";
import { FloorCreationModal } from "../FloorCreationModal";

export const InfinityTower = () => {
  const [floorCreationOpened, setFloorCreationOpened] = useState(false);
  const { account, chainId } = useEthers();
  return (
    <>
      <Button
        onClick={() => setFloorCreationOpened(true)}
        variant="light"
        radius="xl"
        sx={{
          position: "fixed",
          bottom: 42,
          right: 42,
        }}
        disabled={!account || chainId !== Goerli.chainId}
      >
        Mint a new floor
      </Button>
      <FloorCreationModal
        opened={floorCreationOpened}
        onClose={() => setFloorCreationOpened(false)}
      />
    </>
  );
};
