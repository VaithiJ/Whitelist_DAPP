const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  const deployedContract = await whitelistContract.deploy(6);

  await deployedContract.deployed();

  console.log(
    "Whitelist contract deployed at address :",
    deployedContract.address
  );
}

main();
