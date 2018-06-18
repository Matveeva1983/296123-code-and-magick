'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 16;
var TEXT_WIDTH = 70;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 105, 15);
  ctx.fillText('Список результатов:', 105, 35);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var randomOpacity = (Math.random() * 0.9 + 0.1);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity + ')';
    }
    ctx.fillText(Math.round(times[i]), CLOUD_X + (GAP + TEXT_WIDTH) * i, CLOUD_Y + GAP);
    ctx.fillText(players[i], CLOUD_X + (GAP + TEXT_WIDTH) * i, CLOUD_Y + GAP + BAR_HEIGHT + GAP);
    ctx.fillRect(CLOUD_X + (GAP + TEXT_WIDTH) * i, CLOUD_Y + GAP + FONT_GAP + (170 - ((BAR_HEIGHT * times[i]) / maxTime)), barWidth, (BAR_HEIGHT * times[i]) / maxTime);

  }
};
