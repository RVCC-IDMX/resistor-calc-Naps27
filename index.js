import { getResistorOhms } from './resistor.js';

document.addEventListener('DOMContentLoaded', () => {
  addColorBoxListeners();
});

function addColorBoxListeners() {
  for (let i = 0; i <= 3; i++) {
    const colorBoxes = document.getElementById(`color${i}`).getElementsByClassName('box');
    for (const box of colorBoxes) {
      box.addEventListener('click', () => {

        const boxesInContainer = box.parentElement.getElementsByClassName('box');
        for (const b of boxesInContainer) {
          b.classList.remove('box-selected');
        }
        box.classList.add('box-selected');
        updateColor(i, box.textContent.toLowerCase());
        calculateResistor();
      });
    }
  }
}

function updateColor(band, color) {
  const bandElement = document.getElementById(`b${band}`);
  if (bandElement) {
    bandElement.className = `band ${color}`;
  }
}

function calculateResistor() {
  const bands = {
    color1: getColorValue('color0'),
    color2: getColorValue('color1'),
    multiplier: getMultiplierValue('color2'),
    tolerance: getTolerance('color3'),
  };

  if (bands.color1 !== '' && bands.color2 !== '' && bands.multiplier !== '' && bands.tolerance !== '') {
    const resistorValue = getResistorOhms(bands);
    const resistorValueElement = document.getElementById("resistorValue");

    if (resistorValueElement) {
      resistorValueElement.textContent = resistorValue;
    }
  }
}


function getColorValue(colorContainerId) {
  const colorContainer = document.getElementById(colorContainerId);
  const selectedBox = colorContainer ? colorContainer.querySelector('.box-selected') : null;
  return selectedBox ? selectedBox.textContent.toLowerCase() : '';
}

function getMultiplierValue(colorContainerId) {
  const colorContainer = document.getElementById(colorContainerId);
  const selectedBox = colorContainer ? colorContainer.querySelector('.box-selected') : null;
  return selectedBox ? selectedBox.textContent.toLowerCase() : '';
}

function getTolerance(colorContainerId) {
  const colorContainer = document.getElementById(colorContainerId);
  const selectedBox = colorContainer ? colorContainer.querySelector('.box-selected') : null;
  return selectedBox ? selectedBox.textContent.toLowerCase() : '';
}







