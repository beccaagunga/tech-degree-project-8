// VARIABLES //
// const directory = document.querySelector('.directory');
// const newDiv = document.createElement('div');
const card = document.querySelector('.card');


const employees = [];
// Fetch Email //
fetch('https://randomuser.me/api/?exc=login,nat,id,registered&results=12')
   .then(response => response.json()) // parse //
   .then(data => generateEmail(data.results[0].email))  // email

 function generateEmail(data) {
    const email = `<p> ${data} </p>`;
    card.innerHTML = email;
   }

// Fetch IMG //
fetch('https://randomuser.me/api/?exc=login,nat,id,registered&results=12')
     .then(response => response.json()) // parse //
     .then(data => generateImage(data.results[0].picture.large)) // thumbnail image

     function generateImage (data) {
       const img = `<img src='${data}' alt="Employee 1"> </img>`;
       card.innerHTML = img;
     }

 // Fetch Name //
 fetch('https://randomuser.me/api/?exc=login,nat,id,registered&results=12')
   .then(response => response.json()) // parse //
   .then(data => generateName(data.results[0].name.title + '. ' + data.results[0].name.first + ' ' + data.results[0].name.last )) // name

   function generateName (data) {
     const name = `<p> ${data} </p>`;
     card.innerHTML = name;
   }




 // let employeeCard = [];
 //  employees.forEach(employee => {
 //    let employeeCard = employees.filter(employee => employee === email);
 //    console.log(employeeCard);
 //  });


// // Card gets highlighted when user clicks on it //
// $('button').click(function () {
//   $('button').removeClass('selected');
//   $(this).addClass('selected');
// });


// HELPER FUNCTIONS
