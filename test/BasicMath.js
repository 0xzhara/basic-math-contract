const { expect } = require("chai");

describe("BasicMath", function () {
  let BasicMath, basicMath;

  beforeEach(async function () {
    BasicMath = await ethers.getContractFactory("BasicMath");
    basicMath = await BasicMath.deploy();
    await basicMath.deployed();
  });

  it("should add two numbers correctly", async function () {
    const tx = await basicMath.add(10, 5);
    await tx.wait();
    expect(await basicMath.lastResult()).to.equal(15);
  });

  it("should subtract two numbers correctly", async function () {
    const tx = await basicMath.subtract(10, 4);
    await tx.wait();
    expect(await basicMath.lastResult()).to.equal(6);
  });

  it("should revert if subtraction underflows", async function () {
    await expect(basicMath.subtract(3, 5)).to.be.revertedWith("Underflow!");
  });
});
