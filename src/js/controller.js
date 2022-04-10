import { reward_history } from "./model.js";
import { STAKE_ADDR } from "./config";
import rewardsHistView from "./views/rewardsHistView.js";
import { lovelanceToAda } from "./util.js";

const controlRewardsHist = async function () {
  rewardsHistView.renderSpiner();

  const rewards_hist = await reward_history(STAKE_ADDR);

  const rewards = rewards_hist.rewards.flatMap((x) => lovelanceToAda(x));

  rewardsHistView.generateChart(rewards_hist.epochs, rewards);
};

controlRewardsHist();

const init = function () {};

init();
