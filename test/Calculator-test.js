const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Calculator", function () {
  // sans les "this" : 
  // let Calculator, calculator

  beforeEach(async function () {
    this.Calculator = await ethers.getContractFactory('Calculator');
    this.calculator = await this.Calculator.deploy();
    await this.calculator.deployed();
  })

  it('Should calculate the right result : addition', async function () {
    expect(await this.calculator.add(10, 5)).to.equal(15);
  });

  it('Should calculate the right result : substraction', async function () {
    expect(await this.calculator.sub(10, 5)).to.equal(5);
  });

  it('Should calculate the right result : multiplication', async function () {
    expect(await this.calculator.mul(10, 5)).to.equal(50);
  });

  it('Should calculate the right result : division', async function () {
    expect(await this.calculator.div(10, 5)).to.equal(2);
  });

  it('Should revert if nb2 equals 0', async function () {
    await expect(this.calculator.div(10, 0)).to.be.revertedWith("Calculator: cannot divide by zero");
  });

  it('Should calculate the right result : modulo', async function () {
    expect(await this.calculator.mod(10, 5)).to.equal(0);
  });

});
