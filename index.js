        const booksWrapper = document.querySelector("#display");
    let books = []
        window.onload = () => {
            getBooks();
        };

        

        


    function getBooks() {
    fetch("https://striveschool-api.herokuapp.com/books")
        .then((response) => response.json())
        .then((data) => {
            books = data            
            console.log(books)
            displayBooks();
        })
        .catch((err) => console.error(err.message));
}



function displayBooks(books = data) {
    booksWrapper.innerHTML = "";

    data.forEach((book) => {
        booksWrapper.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card">
        <img src="${book.img}" class="img-fluid card-img-top" alt="${book.title
            }">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">${book.category}</p>
          <button class="btn btn-primary" onclick="addToCart('${String(
                book.asin
            )}', this)">$${book.price}</button>
          <button class="btn btn-warning" onclick="this.closest('.col-12').remove()">
            Skip me
          </button>
        </div>
      </div>
    </div>
  `;
    });
}
