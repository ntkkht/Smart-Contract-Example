const hre = require("hardhat");

async function main() {
    try {
        const certificateContract = await hre.ethers.getContractFactory("Certificate");
        const contractAddress = "0xaE118583467D958FFDB9aF81988C351EeDDB5351"; // deployed contract address
        const contract = await certificateContract.attach(contractAddress);
        console.log(await contract.addCertified("Akara Prayote"))
        const certifiedList = await contract.getCertified();
        console.log("certified list:", certifiedList);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main();