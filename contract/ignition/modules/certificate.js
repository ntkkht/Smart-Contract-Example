const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("CertificateModule", (moduleBuilder) => {

  const certificate = moduleBuilder.contract("Certificate");

  return { certificate };
});
