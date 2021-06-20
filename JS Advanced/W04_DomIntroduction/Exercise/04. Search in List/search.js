function search() {
   // 1. Select elements
   let searchElement = document.getElementById('searchText');
   let allLiElements = Array.from(document.querySelectorAll('#towns li'));
   // 2. Parse search text
   let searchText = searchElement.value;

   // 3. Main logic
   //a. get all Li elements
   //b. clear all li's which contain the search text
   allLiElements.forEach(el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';

   });
   // c. filter all li's which contains the search text
   // d. bold and underline matching lis
   let filterLis = allLiElements
      .filter(x => x.textContent.includes(searchText))
   let mappedLi = filterLis.map(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';
   });
   // e˛ show number of matches in result div
   let resultDiv = document.getElementById('result');
   resultDiv.textContent = `${mappedLi.length} matches found`;
}
