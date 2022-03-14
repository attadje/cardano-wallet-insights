import { BF_APIKEY, BF_NETWORK, STAKE_ADDR } from "./config.js";
import { AJAX } from "./util.js";

export const state = {
  api_key: BF_APIKEY,
  network: BF_NETWORK.mainnet,
};

export const reward_history = async function (stake_adrr) {
  const rewards_hist = await AJAX(
    `${state.network}/accounts/${stake_adrr}/rewards`
  );
  const epochs = [];
  const rewards = [];
  rewards_hist.forEach(function (item) {
    epochs.push(item.epoch);
    rewards.push(item.amount);
  });

  return { x: epochs, y: rewards };

  //cardano-mainnet.blockfrost.io/api/v0/accounts/{stake_address}/rewards
};
