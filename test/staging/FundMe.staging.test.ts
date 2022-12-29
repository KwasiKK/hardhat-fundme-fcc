import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { assert } from "chai"
import { BigNumber } from "ethers"
import { network, deployments, ethers, getNamedAccounts } from "hardhat"
import { developmentChains } from "../../helper-hardhat-config"
import { FundMe, MockV3Aggregator } from "../../typechain-types"

developmentChains.includes(network.name)
  ? describe.skip
  : describe("FundMe", function () {
      let fundMe: FundMe
      let deployer: string
      const sendValue: BigNumber = ethers.utils.parseEther("1")
      beforeEach(async () => {
        deployer = (await getNamedAccounts()).deployer
        fundMe = await ethers.getContract("FundMe", deployer)
      })

      it("allows people to fund and withdraw", async () => {
        await fundMe.fund({ value: sendValue })
        await fundMe.withdraw()
        const endingBalance = await fundMe.provider.getBalance(fundMe.address)
        assert.equal(endingBalance.toString(), "0")
      })
    })
