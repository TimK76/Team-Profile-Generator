function generateHTML(data) {
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
<div class="shadow-lg card" style="width: 18rem;">
  <div class=" card-body bg-primary text-white">
    <h5 class="card-title">${name}</h5>
    <h5 class="card-role">${role}</h5>
  </div>
  <div class="p-4 bg-light">
    <p class="card-text my-0 p-2 bg-white border">ID: ${id}</p>
    <a href="mailto:${email} class="card-text my-0 p-2 bg-white border">Email: ${email}</a>
    <p class="card-text my-0 p-2 bg-white border">Office Number: ${officeNumber}</p>
  </div>
</div>
</main>

    
</body>
</html>
    
    `
}

module.exports = { generateHTML };