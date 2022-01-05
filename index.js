let inputField;
let message = document.querySelector("#message");


function addMovie(event){
    event.preventDefault()
    //ADD MOVIES
    inputField = document.querySelector(`input`).value;

    let movie = document.createElement(`li`);
    let movieTitle = document.createElement(`span`);

    movieTitle.textContent = inputField;

    movie.appendChild(movieTitle);

    document.querySelector(`ul`).appendChild(movie);

    //CLEARING INPUT
    document.querySelector(`input`).value = "";
    
    //DELETING
    let deleteBtn = document.createElement(`button`);

    deleteBtn.textContent = "X";

    //BUTTON
    movie.appendChild(deleteBtn);

    //BUTTON ACTIVIATION ONCLICK
    deleteBtn.addEventListener(`click`, deleteMovie);

    //CROSS MOVIEW ONCLICK
    movieTitle.addEventListener(`click`, crossOffMovie);
}

document.querySelector("form").addEventListener('submit', addMovie);

function deleteMovie(event){
  event.target.parentNode.remove();
  message.textContent = `${event.target.parentNode.textContent} deleted!`;
  revealMessage();
}

function crossOffMovie(event){
  event.target.classList.toggle("checked");

  if(event.target.classList.contains("checked")){
    message.textContent = `${event.target.textContent} watched!`;
  }
  else{
    message.textContent = `${event.target.textContent} added back!`;
  }
  revealMessage();
}

function revealMessage(){
  message.classList.remove("hide")
  setTimeout(function(){ message.classList.toggle("hide") }, 1000);
}