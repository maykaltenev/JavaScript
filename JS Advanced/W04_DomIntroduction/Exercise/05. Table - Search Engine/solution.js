function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //  1. Select elements
      let searchElement = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));
      // 1a extract/parse values
      let searchText = searchElement.value;


      //1A) Clear styles from previous search
      rowElements.forEach(el => {
         el.className = '';
      });

      // 2. Find Matching Row elements to text
      // 3. Modify style for matching rows
      let filteredRow = rowElements.filter(el => {
         let values = Array.from(el.children);
         if(values.some(x=> x.textContent.includes(searchText))) {
            el.className = 'select';
         }

      });

      //4. Clear txt field
      searchElement.value = '';
   }
}