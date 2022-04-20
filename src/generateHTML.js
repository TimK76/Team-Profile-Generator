function generateCard(answer) {
  var p = "";
  if (answer.getRole() === "Manager") {
    p = `    <p class="card-text my-0 p-2 bg-white border">Office Number: ${answer.officeNumber}</p>
    `;
  } else if (answer.getRole() === "Engineer") {
    p = `     <p class="card-text my-0 p-2 bg-white border">GitHub: ${answer.github}</p>
    `;
  } else {
    p = `    <p class="card-text my-0 p-2 bg-white border">School: ${answer.school}</p>
    `;
  }
  return `
  <div class="shadow-lg card" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
      <h5 class="card-title">${answer.name}</h5>
      <h5 class="card-role">${answer.getRole()}</h5>
    </div>
    <div class="p-4 bg-light">
      <p class="card-text my-0 p-2 bg-white border">ID: ${answer.id}</p>
      <a href="mailto:${answer.email} class="card-text my-0 p-2 bg-white border">Email: ${answer.email}</a>
      <div>${p}</div>
    </div>
  </div>
`;
}

function generateHTML(data) {
  var card = "";
  for (var i = 0; i < data.length; i++) {
    card += generateCard(data[i]);
  }
  return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
<header>
    <h1 class= "py-4 bg-danger text-white text-center font-weight-bolder"> My Team</h1> 
</header>
<main class="d-flex flex-wrap justify-content-around">
${card}
</main>

    
</body>
</html>
    
    `;
}

module.exports = { generateHTML };
