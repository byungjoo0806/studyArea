const ZHToken = artifacts.require('ZHToken');

module.exports = function (deployer) {
    deployer.deploy(ZHToken, 'ZHToken', 'ZHT', 5000);
};