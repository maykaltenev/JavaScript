function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      //1. Select elements for input
      let textAreaElement = document.querySelector('#inputs textarea');

      // 2. Extract/Parse input data
      let inputStr = textAreaElement.value;
      let inputArr = JSON.parse(inputStr);

      //3. Add object to keep restaurant and workers data;

      let restaurants = {};

      inputArr.forEach(el => {
         let [restaurantName, workersString] = el.split(' - ');
         let inputWorkers = workersString.split(', ')
            .map(x => {
               let [name, salary] = x.split(' ');
               return { name, salary: Number(salary) };
            });

         if (restaurants[restaurantName] === undefined) {
            restaurants[restaurantName] = {
               restaurantName: restaurantName,
               workers: [],
               getAverageSalary() { return this.workers.reduce((acc, el) => acc + el.salary, 0) / this.workers.length; },
            };
         }
         restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(inputWorkers);

      });

      let sortedRestaurants = Object.values(restaurants).sort((a, b) => b.getAverageSalary() - a.getAverageSalary());

      let bestRestaurant = sortedRestaurants[0];

      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);
      let averageSalary = bestRestaurant.getAverageSalary().toFixed(2);
      let bestSalary = bestRestaurant.workers[0].salary.toFixed(2);

      let bestRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${averageSalary} Best Salary: ${bestSalary}`;
      let workersString = bestRestaurant.workers
         .map(x => `Name: ${x.name} With Salary: ${x.salary}`)
         .join(' ');

      let bestRestaurantDiv = document.querySelector('#bestRestaurant p');
      let workersDiv = document.querySelector('#workers p');

      bestRestaurantDiv.textContent = bestRestaurantString;
      workersDiv.textContent = workersString;
   }
}