/*
	Copyright 2018 Open Store Initiative

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

			http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
const Util = artifacts.require("Util.sol");
const PaymentContract = artifacts.require("PaymentContract.sol");
const AssetRegistry = artifacts.require("AssetRegistry.sol");

module.exports = async (deployer) => {
	deployer.deploy(Util);
	await deployer.deploy(PaymentContract, 0, "0x0");
	deployer.deploy(AssetRegistry, PaymentContract.address);
};