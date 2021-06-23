function create(words) {
   let contentDiv = document.getElementById('content');
   for (let index = 0; index < words.length; index++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = words[index];
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click',showParagraph);
      contentDiv.appendChild(div);
   }
   contentDiv.addEventListener('click',showParagraph);
   function showParagraph(e){
      if(e.target.matches('#content div')){
         let p = e.target.children[0];
         p.style.display = 'block';
      }
      console.log(e.target.matches('#content div'));
   }
}