# Basic Math Contract

A simple smart contract using Solidity + Hardhat for basic math operations.

## ✨ Features
- Addition of two numbers
- Subtraction of two numbers (with underflow protection)
- Saving the last result in the `lastResult` state

## 🚀 How to Run

### 1. Clone the repo
```bash
git clone https://github.com/<username>/basic-math-contract.git
cd basic-math-contract

npm install

npx hardhat test

ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/<API_KEY>
PRIVATE_KEY=0xabc123...

npx hardhat run scripts/deploy.js --network sepolia

