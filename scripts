async function main() {
  const BasicMath = await ethers.getContractFactory("BasicMath");
  const basicMath = await BasicMath.deploy();
  await basicMath.deployed();

  console.log("BasicMath deployed to:", basicMath.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
