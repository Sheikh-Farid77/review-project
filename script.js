const btn = document.getElementById('submit-btn');

btn.addEventListener('click', function(){
    const input = document.getElementById('text-area');
    const inputValue = input.value;
    const review = document.getElementById('review');
    const li = document.createElement('li');
    li.textContent = inputValue;
    review.appendChild(li)
    input.value = '';

})