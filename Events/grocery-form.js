// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector('#list');

function handleSubmit(e) {
    e.preventDefault();
    
    const product = e.currentTarget.product.value;
    const quantity = e.currentTarget.qty.value;

    const listItem = document.createElement('li');
    listItem.textContent = `${quantity} ${product}`;
    list.appendChild(listItem);
    
}

form.addEventListener('submit', handleSubmit);