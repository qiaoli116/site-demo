class MovieList{
    constructor(rootId, movies){
        this.rootId = rootId;
        this.movieList = movies;
        this.refresh();
    }
    
    // generate one row
    movieItemString(number, title, year){
        //return `<div class="row">${number}. ${title} (${year})</div>`;
        return `            
        <div class="row">
            <span>${number}.</span>
            <span>${title}</span>
            <span>(${year})</span>
            <span>
            <form class="inline-form">
                <input type="hidden" name="index" value="${number}">
                <button type="button" name="submit" onclick="deleteClickV2(this);">Delete</button>
            </form>
            <form class="inline-form">
                <input type="hidden" name="index" value="${number}">
                <button type="button" name="submit" onclick="showUpdateForm(this);">Update</button>
            </form>
            </span>
        </div>
        `
    }

    // generate all rows 
    movieListString(movies){
        let html = ``;
        for(let i = 0; i < movies.length; i++) {
            let movie = movies[i];
            html += this.movieItemString(i+1, movie.title, movie.year);
        }
        return html;
    }

    // refresh the whole list in HTML
    refresh(){
        let elementString = this.movieListString(this.movieList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }

    // add one to the end of the list
    add(title, year) {
        // add a new item to the end
        this.movieList.push(
            {title: title, year: year}
        );
        //refresh the view
        this.refresh();
    }

    // update by index
    update(index, title, year) {
        this.movieList[index].title = title;
        this.movieList[index].year = year;
        this.refresh();
    }

    // delete by index
    delete(index) {
        this.movieList.splice(index, 1);
        this.refresh();
    }

    // sort by name A to Z
    sortA2Z() {
        this.movieList.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
        this.refresh();
    }

    // sort by name Z to A
    sortZ2A() {
        this.movieList.sort(function (a, b) {
            return b.title.localeCompare(a.title);
        });
        this.refresh();
    }

    // search by partial name string
    search(nameString) {
        let shortList = [];
        for(let movie of this.movieList) {
            if (movie.title.includes(nameString)) {
                shortList.push(movie);
            }
        }

        // refresh the list with the short list
        let elementString = this.movieListString(shortList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }
}