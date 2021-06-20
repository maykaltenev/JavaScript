function solve() {

  // 1. Select elements
  let textElement = document.querySelector('#text');
  let namingConventionElement = document.querySelector('#naming-convention');
  // 2. Parse 
  let text = textElement.value;
  let namingConvention = namingConventionElement.value;
  //3. Main Logic
  let result = applyNamingConvention(text, namingConvention);
  //4. Display result in DOM
  let spanElement = document.getElementById('result');
  spanElement.textContent = result;

  function applyNamingConvention(text, convention){
    const conventionSwitch = {
      'Pascal Case': () => text
      .toLowerCase()
      .split(' ')
      .map(x => x[0].toUppercase() + x.slice(1))
      .join(''),
      'Camel Case': () => text
      .toLowerCase()
      .split(' ')
      .map((x,i) => x = i !== 0 ? x[0].toUppercase() + x.slice(1) : x)
      .join(''),
      default: () => 'Error!'
    }

    return (conventionSwitch[convention] || conventionSwitch.default)();
  }

}