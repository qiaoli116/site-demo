let initMovies = [
    {title: "The Shawshank Redemption", year: 1994},
    {title: "The Godfather", year: 1972},
    {title: "The Godfather: Part II", year: 1974},
    {title: "The Dark Knight", year: 2008}
];
var movieList = new MovieList("list", initMovies);






function searchClick(){
    let formElements = document.getElementById("form-list-control").elements;
    let text = formElements["search-string"].value;
    movieList.search(text);
}

function a2zClick(){
    movieList.sortA2Z();
}

function z2aClick(){
    movieList.sortZ2A();
}

function addClick(){
    let formElements = document.getElementById("form-add").elements;
    let title = formElements["title"].value;
    let year = formElements["year"].value
    movieList.add(title, year);
    document.getElementById("pop-up-add").classList.add("hidden");
}

function updateClick(){
    let formElements = document.getElementById("form-update").elements;
    let index = formElements["index"].value - 1;
    let title = formElements["title"].value;
    let year = formElements["year"].value
    movieList.update(index, title, year);
    document.getElementById("pop-up-update").classList.add("hidden");
}

/*
function deleteClick(){
    let formElements = document.getElementById("form-delete").elements;
    let index = formElements["index"].value - 1;
    movieList.delete(index);
}
*/

function showAddForm(){
    document.getElementById("pop-up-add").classList.remove("hidden");
}

function showUpdateForm(element){
    document.getElementById("pop-up-update").classList.remove("hidden");
    // get the form, witch is the parent of button
    let form = element.parentElement;
    // get the formelements
    let formElements = form.elements;
    let index = formElements["index"].value - 1;
    
    let formUpdateElements = document.getElementById("form-update").elements;
    formUpdateElements["index"].value = index;
}

function deleteClickV2(element){
    // element is the button itself
    console.log(element);
    // get the form, witch is the parent of button
    let form = element.parentElement;
    // get the formelements
    let formElements = form.elements;
    let index = formElements["index"].value - 1;
    movieList.delete(index);
}