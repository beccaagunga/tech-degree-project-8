// VARIABLES //
const directory = document.querySelector('.directory');
const newDiv = document.createElement('div');
const p = document.createElement('p');
const a = document.createElement('a');


document.getElementById("directory").appendChild(newDiv);
document.getElementById("directory").appendChild(p);

// Card gets highlighted when user clicks on it //
$('button').click(function () {
  $('button').removeClass('selected');
  $(this).addClass('selected');
});

// Create card //


// Fetch IMG //
const img = fetch('https://randomuser.me/api/?=jsoncallback=?')
  .then(response => response.json()) // parse //
  .then(data => generateImage(data.results[0].picture.large)) // thumbnail image

// Fetch Name //
fetch('https://randomuser.me/api/?=jsoncallback=?')
  .then(response => response.json()) // parse //
  .then(data => generateName(data.results[0].name.title + '. ' + data.results[0].name.first + ' ' + data.results[0].name.last )) // name

// // Fetch Email //
// fetch('https://randomuser.me/api/?=jsoncallback=?')
//   .then(response => response.json()) // parse //
//   .then(data => generateEmail(data.results[0].email)) // email

// HELPER FUNCTIONS

function generateImage (data) {
  const html = `<img src='${data}' alt="Employee 1"> </img>`;
  newDiv.innerHTML = html;
}

function generateName (data) {
  const html = `<p> ${data} </p>`;
  p.innerHTML = html;
}
