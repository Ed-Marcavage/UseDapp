import { useEtherBalance, useTokenBalance } from "@usedapp/core";
import { useEthers } from "@usedapp/core";
import brownieConfig from "../brownie-config.json";
import helperConfig from "../helper-config.json";
import { constants } from "ethers";

export const Main = () => {
  const { chainId, error, active } = useEthers();
  console.log(chainId);
  const networkName = chainId ? helperConfig[chainId] : "dev";
  const wethTokenAddress = chainId
    ? brownieConfig["networks"][networkName]["weth_token"]
    : constants.AddressZero;
  const { account } = useEthers();
  const ethBalance = useTokenBalance(wethTokenAddress, account);
  return (
    <div>
      <p>Eth Balance: {ethBalance && ethBalance.toString()} ETH</p>
    </div>
  );
};
