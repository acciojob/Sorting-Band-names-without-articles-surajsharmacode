//your code here

// Array of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'The Rolling Stones', 'Pink Floyd', 'AC/DC', 'The Who'];

// Function to remove articles ('a', 'an', 'the') from a string
function removeArticle(str) {
  return str.replace(/^(a|an|the)\s+/i, '');
}

// Sort the array in lexicographic order (excluding articles)
bandNames.sort((a, b) => removeArticle(a).localeCompare(removeArticle(b)));

// Create an unordered list and add each band name as a list item
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Append the unordered list to the body of the HTML document
document.body.appendChild(ul);
