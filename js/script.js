// VARIABLES //
const container = document.querySelector('.container');

// Fetch array of 12 people's info //
let employees = [];
fetch('https://randomuser.me/api/?exc=login,nat,id,registered&results=12')
   .then(response => response.json()) // parse //
   .then(data => {employees = data.results;
                  console.log(employees)
                })
    // .then(data => generateImage(data))
    .then(data => generateInfo(data));


// Generate User Info (name, email, city) //
function generateInfo(data) {
employees.forEach((employee, index) => {

let card = document.createElement('div');
  card.classList.add("card", "employee" + index);
  container.appendChild(card);

let infoContainer = document.createElement('div');
  infoContainer.className = "infoContainer";
  card.appendChild(infoContainer);

// Call this function to generate user image //
generateImage(employee, infoContainer);

let userInfoDiv = document.createElement('div');
  userInfoDiv.className = "user_info";
  $(container.appendChild(userInfoDiv));
  const name = `${employee.name.title}.` + ' ' + `${employee.name.first}` + ' ' + `${employee.name.last }`;
  const email = `${employee.email}`;
  const city = `${employee.location.city}`;
  let userInfo =  `
    <p class="name"> ${name} </p>
    <p class="email"> ${email} </p>
    <p class="city"> ${city} <p>`;
    userInfoDiv.innerHTML = userInfo;
    $(infoContainer.appendChild(userInfoDiv));
    });
  }

// Generate User Image //
function generateImage(employee, card){

let imgContainer = document.createElement('div');
  imgContainer.className = "imgContainer";
  card.appendChild(imgContainer);

  const avatar = employee.picture.large;
  let userImg = `
                    <img src='${avatar}' alt="Employee 1"> </img>
                  `;
  imgContainer.innerHTML = userImg;
  }

// MODAL//















// // Card gets highlighted when user clicks on it //
// $('button').click(function () {
//   $('button').removeClass('selected');
//   $(this).addClass('selected');
// });


// HELPER FUNCTIONS
