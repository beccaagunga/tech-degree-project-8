// VARIABLES //
// const directory = document.querySelector('.directory');
const container = document.querySelector('.container');

// Fetches array of 12 people's info //
let employees = [];
fetch('https://randomuser.me/api/?exc=login,nat,id,registered&results=12')
   .then(response => response.json()) // parse //
   .then(data => {employees = data.results;
                  console.log(employees)
                })
    .then(data => generateImage(data))
    .then(data => generateInfo(data));

        function generateInfo(data) {
        employees.forEach((employee, index) => {
      let infoContainer = document.createElement('div');
          infoContainer.className = "infoContainer";
          $(container.appendChild(infoContainer));

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

        function generateImage(data){
          employees.forEach((employee, index) => {

            let imgContainer = document.createElement('div');
                imgContainer.className = "imgContainer";
                $(container.appendChild(imgContainer));


            const avatar = employee.picture.large;
            let userImg = `
                              <img src='${avatar}' alt="Employee 1"> </img>
                            `;
            imgContainer.innerHTML = userImg;
            // $(infoContainer.appendChild(imgContainer));
          });
        }


// // Card gets highlighted when user clicks on it //
// $('button').click(function () {
//   $('button').removeClass('selected');
//   $(this).addClass('selected');
// });


// HELPER FUNCTIONS
