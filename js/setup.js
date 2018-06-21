'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = [
  'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [
  'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = [
  'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = [
  'black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTYTI = 4;

var getRandomArrayElement = function (arr) {
  var randomIndexNumber = Math.floor(Math.random() * arr.length);
  return arr[randomIndexNumber];
};
var generateOneWizard = function () {
  var randomWizard = {'name': ' ', 'eyesColor': ' ', 'coatColor': ' '};
  randomWizard.name = getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARD_SURNAMES);
  randomWizard.coatColor = getRandomArrayElement(COAT_COLORS);
  randomWizard.eyesColor = getRandomArrayElement(EYES_COLORS);
  return randomWizard;
};
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var renderWizard = function (wizard) {
  var wizardTemplate = similarWizardTemplate.cloneNode(true);
  wizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardTemplate.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardTemplate;
};
var fragment = document.createDocumentFragment();
var generateWizardsFriends = function (quantyti) {
  for (var i = 0; i < quantyti; i++) {
    var randomWizard = generateOneWizard();
    var similarWizard = renderWizard(randomWizard);
    fragment.appendChild(similarWizard);
  }
};
var similarBlock = document.querySelector('.setup-similar');
var similarListElement = similarBlock.querySelector('.setup-similar-list');
generateWizardsFriends(WIZARDS_QUANTYTI);
similarListElement.textContent = '';
similarListElement.appendChild(fragment);
similarBlock.classList.remove('hidden');


