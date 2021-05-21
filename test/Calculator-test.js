const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function () {
  let Calculator, calculator

  describe('Deployment', () => {

    it('Should set the right owner at deployment', async () => {
      Calculator = await ethers.getContractFactory('Calculator');
      calculator = await Calculator.deploy();
      await calculator.deployed()
      const owner = await ethers.getSigners();
      expect(calculator.owner).to.equal(owner.address);
    });

  })

  describe('Calculation', () => {

    beforeEach(async () => {
      Calculator = await ethers.getContractFactory('Calculator');
      calculator = await Calculator.deploy();
    })

    it('Should calculate the right result : addition', async function () {
      const result = await calculator.add(10, 5);
      expect(result).to.equal(15);
    });

    it('Should calculate the right result : substraction', async function () {
      const result = await calculator.sub(10, 5);
      expect(result).to.equal(5);
    });

    it('Should calculate the right result : multiplication', async function () {
      const result = await calculator.mul(10, 5);
      expect(result).to.equal(50);
    });

    it('Should calculate the right result : division', async function () {
      const result = await calculator.div(10, 5);
      expect(result).to.equal(2);
    });

    it('Should revert if nb2 equals 0', async function () {
      const result = await calculator.div(10, 0);
      expect(result).to.be.reverted;
    });

    it('Should calculate the right result : modulo', async function () {
      const result = await calculator.mod(10, 5);
      expect(result).to.equal(0);
    });

  })

});
