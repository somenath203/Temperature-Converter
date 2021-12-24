const calculateTemp = () => {
  const numberTemp = document.getElementById('temp').value;

  const tempSelected = document.getElementById('temp_diff');

  // getting the options selected by user in a drop down list
  const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };
  const FehtoCel = (fehr) => {
    let celcius = Math.round(((fehr - 32) * 5) / 9);
    return celcius;
  };

  let result;

  if (valueTemp == 'cel') {
    result = celToFah(numberTemp);
    document.getElementById(
      'resultContainer'
    ).innerHTML = `Temperature in Farhenheit from Celcius :- ${result}°Farhenheit`;
  } else if(valueTemp == 'fah'){
    result = FehtoCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `Temperature in Celcius from Farhenheit :- ${result}°Celcius`;
  }
};
