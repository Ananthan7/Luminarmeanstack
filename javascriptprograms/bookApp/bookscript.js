function createBook() {
  let book_name = bkname.value;
  let author_name = author.value;
  let amount = price.value;
  let book = {
    name: book_name,
    author: author_name,
    price: amount,
  }
  localStorage.setItem(book_name, JSON.stringify(book));
  // let books = JSON.parse(localStorage.getItem(book_name))
  // populate(books)
}

function populate() {
  let len = localStorage.length;
  let html_data = ``;
  for (let i = 0; i < len; i++) {
    let books = JSON.parse(localStorage.getItem(localStorage.key(i)));
    console.log(books);
    html_data += `<tr><td>${books.name}</td>
    <td>${books.author}</td>
    <td>${books.price}</td>
    </tr>`
    
  }
  document.querySelector("#result").innerHTML = html_data;
}
