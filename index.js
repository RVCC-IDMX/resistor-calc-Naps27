import { getResistorOhms } from './resistor';

function updateResistor() {
  const color0 = document.getElementById('color0').value;
  const color1 = document.getElementById('color1').value;
  const color2 = document.getElementById('color2').value;
  const color3 = document.getElementById('color3').value;

  const resistor = document.getElementById('resistor');
  resistor.style.background = `linear-gradient(to right, ${color0}, ${color1}, ${color2}, ${color3})`;

  const bands = { color1, color2, multiplier: color3, tolerance: 'brown' };
  const resistorValue = getResistorOhms(bands);

  document.getElementById('resistor-value').textContent = resistorValue;
}

document.getElementById('color0').addEventListener('change', updateResistor);
document.getElementById('color1').addEventListener('change', updateResistor);
document.getElementById('color2').addEventListener('change', updateResistor);
document.getElementById('color3').addEventListener('change', updateResistor);

updateResistor();

