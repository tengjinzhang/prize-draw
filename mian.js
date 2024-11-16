
// 存储所有的奖励
const allRewards = [
  "耳塞", "小新盲盒", "裤裤", "沙琪玛", "智能手表",
  "麻辣王子", "奶啤", "找滕金璋发50块去吃夜宵", "奖励9", "奖励10",
  "奖励11", "奖励12", "奖励13", "奖励14", "奖励15",
  "奖励16", "奖励17", "奖励18", "奖励19", "奖励20",
  "奖励21", "奖励22", "奖励23", "奖励24", "奖励25",
  "奖励26", "奖励27", "奖励28", "奖励29", "奖励30"
];

// 用于存储已抽取的奖励
let drawnRewards = JSON.parse(localStorage.getItem('drawnRewards')) || [];

function drawLottery() {
  if (drawnRewards.length === allRewards.length) {
    document.getElementById('result').textContent = "所有奖励已抽完！";
    return;
  }

  let availableRewards = allRewards.filter(reward => !drawnRewards.includes(reward));
  let randomIndex = Math.floor(Math.random() * availableRewards.length);
  let drawnReward = availableRewards[randomIndex];

  drawnRewards.push(drawnReward);
  localStorage.setItem('drawnRewards', JSON.stringify(drawnRewards));

  document.getElementById('result').textContent = `恭喜你抽到：${drawnReward}`;
}