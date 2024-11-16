
// 存储所有的奖励
const allRewards = [
  "耳塞", "小新盲盒", "裤裤", "沙琪玛", "智能手表",
  "麻辣王子", "奶啤", "找滕金璋发50块去吃夜宵", "笋尖小零食", "滕金璋任意小奖励一个",
  "滕金璋请客奶茶", "换新袜子", "小皮筋补货", "麻辣鸭脖！", "白象方便面",
  "滕金璋任意小奖励一个", "坚果小零食", "赵一鸣同款大麦茶", "零食侦探大肉肠", "笔记本一本",
  "十个男人周边一个", "迷你三寸小相框一个", "唇膏补货", "北京烤鸭辣条", "迷你小盆栽",
  "追剧小零食", "夜宵吃喝任选", "豆豉鱼罐头下饭菜！！！", "薯片大礼包", "滕金璋任意小奖励一个"
];

let frizeFlag = false;

// 用于存储已抽取的奖励
let drawnRewards = JSON.parse(localStorage.getItem('drawnRewards')) || [];

function drawLottery() {
  if (frizeFlag) {
    textResultHandle("请先点击重置抽奖按钮！")
    return;
  }

  document.getElementById('sucess').style.opacity = 1;

  if (drawnRewards.length === allRewards.length) {
    textResultHandle("所有奖励已抽完！")
    document.getElementById('drawBtn').style.display = 'none'
    return;
  }

  let availableRewards = allRewards.filter(reward => !drawnRewards.includes(reward));
  let randomIndex = Math.floor(Math.random() * availableRewards.length);
  let drawnReward = availableRewards[randomIndex];

  drawnRewards.push(drawnReward);
  localStorage.setItem('drawnRewards', JSON.stringify(drawnRewards));

  textResultHandle(`恭喜抽到：${drawnReward}`)
  frizeFlag = true;
  document.getElementById('drawBtn').style.display = 'none'
  document.getElementById('restBtn').style.display = 'block'
}

function resetDraw() {
  frizeFlag = false;
  document.getElementById('sucess').style.opacity = 0;
  document.getElementById('drawBtn').style.display = 'block'
  document.getElementById('restBtn').style.display = 'none'
}

function textResultHandle(str) {
  document.getElementById('result').textContent = str;
}

