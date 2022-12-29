import { ethers, getNamedAccounts } from "hardhat"

async function main() {
  const deployer = (await getNamedAccounts()).deployer
  const fundMe = await ethers.getContract("FundMe", deployer)
  console.log("Withdrawing contract....")
  const transactionResponse = await fundMe.withdraw()
  await transactionResponse.wait(1)
  console.log("Got it back!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
