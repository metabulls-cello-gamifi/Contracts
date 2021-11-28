const Nftcontract = artifacts.require("Nftcontract");
const GameContract = artifacts.require("GameContract");
const FightGame = artifacts.require("FightGame");
const Damage = artifacts.require("Damage")


module.exports = async function (deployer) {
  await deployer.deploy(Nftcontract,"ab","ab","ab","ab");
  const nft = await Nftcontract.deployed();
  await deployer.deploy(GameContract,nft.address);
  const maincontract= await GameContract.deployed();

  await deployer.deploy(FightGame);
  await deployer.deploy(Damage);
  const damage = await Damage.deployed();
  nft.setMasterContract(maincontract.address);
  damage.setMasterContract(maincontract.address);



};

