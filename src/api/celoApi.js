import Web3 from "web3";

// Connect to Celo Alfajores testnet
const web3 = new Web3("https://alfajores-forno.celo-testnet.org");

export const getCeloBalance = async (address) => {
  const balance = await web3.eth.getBalance(address);
  return web3.utils.fromWei(balance, "ether");
};

// Placeholder function: buy a pixel (in real app, call smart contract)
export const buyPixel = async (address, x, y, color) => {
  console.log(`Pixel purchased by ${address} at (${x},${y}) with color ${color}`);
  return { success: true };
};
