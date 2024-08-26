const hre = require("hardhat");

async function main() {
    try {
        const contractFactory = await hre.ethers.getContractFactory("Certificate");
        const contract = await contractFactory.deploy();
        await contract.waitForDeployment();
        console.log(await contract.getAddress());
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

}

main()