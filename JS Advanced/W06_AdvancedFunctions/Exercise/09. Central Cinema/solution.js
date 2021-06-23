function solve() {
    // 1. Select elements
    let onScreenButton = document.querySelector('#container button');
    //2a attach event listener on [on-screen] button
    onScreenButton.addEventListener('click', onScreenHandler);

    let clearArchiveButton = document.querySelector('#archive > button');
    clearArchive.addEventListener('click', clearArchiveButton);

    //2. Implement add movie functionality
    function onScreenHandler(e) {
        e.preventDefault();
        //2b get input values for movie
        let movieInputs = document.querySelectorAll('#container input');
        let nameInput = movieInputs[0];
        let hallInput = movieInputs[1];
        let priceInput = movieInputs[2];
        //2c convert values where needed

        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;

        if (name.trim() !== '' &&
            hall.trim() !== '' &&
            price.trim() !== '' &&
            !isNaN(Number(price))) {

            price = Number(price).toFixed(2);
            //2d create html structure for movie

            let li = document.createElement('li');

            let nameSpan = document.createElement('span');
            nameSpan.textContent = name;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hall}`;

            let rightSectionDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = price;

            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

            //3a attach event listener each movie's archive button
            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            archiveButton.addEventListener('click', archiveMovie);

            rightSectionDiv.appendChild(priceStrong);
            rightSectionDiv.appendChild(ticketsSoldInput);
            rightSectionDiv.appendChild(archiveButton);

            li.appendChild(nameSpan);
            li.appendChild(hallStrong);
            li.appendChild(rightSectionDiv);


            //2e attach html structure to movies on screen section
            let moviesUl = document.querySelector('#movies ul');
            moviesUl.appendChild(li);
        }
    }
    //3. Implement Archive movie functionality
    function archiveMovie(e) {
        //3b get input values for current movie to archive
        let movieLi = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketSold = ticketsSoldInput.value;

        if (ticketSold.trim() !== '' &&
            !isNaN(Number(ticketSold))) {

            ticketSold = Number(ticketSold);
            //3c convert values where needed
            let priceStrong = movieLi.querySelector('div strong');
            let price = Number(priceStrong.textContent);

            //3d create html structure for archived movie
            let hallStrong = movieLi.querySelector('strong');
            let totalPrice = price * ticketSold;
            hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

            let rightDiv = movieLi.querySelector('div');
            rightDiv.remove();

            let deleteButton = document.createElement('button');
            //4a attach event listener each movie's delete button
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deleteFromArchive);
            movieLi.appendChild(deleteButton);

            //3e attach html structure to movies on archive section
            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(movieLi);
        }
    }
    //4. Implement Archive movie  delete functionality
    function deleteFromArchive(e) {
        let currentElement = e.target;
        let movieLi = currentElement.parentElement;
        //4b delete html structure of a deleted movies from dom
        movieLi.remove();
    }
    //5. implement archive clear button functionality
    function clearArchive() {
        //5a delete archive LIs element
        let archiveLis = Array.from(document.querySelector('#archive ul li'));
        archiveLis.forEach(el => el.remove());
    }
}
