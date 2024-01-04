const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NationDaoSetup", function () {
  it("should grant EXECUTE_PERMISSION_ID correctly", async function () {
    // Deploy the contracts needed for your tests
    const NationDao = await ethers.getContractFactory("NationDao");
    const nationDao = await NationDao.deploy(/* constructor arguments */);
    await nationDao.deployed();

    const NationDaoSetup = await ethers.getContractFactory("NationDaoSetup");
    const nationDaoSetup = await NationDaoSetup.deploy(nationDao.address);
    await nationDaoSetup.deployed();
    expect(await nationDao.hasPermission(/* args */)).to.equal(true);
  });
});
