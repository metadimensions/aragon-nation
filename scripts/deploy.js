const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  // const NATION_NFT_ADDRESS; // Replace with your Nation3 NFT contract address
  // const DAO_ADDRESS; // Replace with your DAO address
  // const VOTING_DURATION = 86400; // Replace with your desired default voting duration in seconds
  
  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', (await deployer.getBalance()).toString());

  // Deploy NationDao contract with the initializer parameters
  const NationDao = await ethers.getContractFactory('NationDao');
  const nationDao = await NationDao.deploy();
  await nationDao.deployed();
  console.log('NationDao address:', nationDao.address);

  // Deploy NationDaoSetup contract and pass the deployed NationDao address
  const NationDaoSetup = await ethers.getContractFactory('NationDaoSetup');
  const nationDaoSetup = await NationDaoSetup.deploy(nationDao.address);
  await nationDaoSetup.deployed();
  console.log('NationDaoSetup address:', nationDaoSetup.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
