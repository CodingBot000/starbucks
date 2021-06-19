let boxEl = document.querySelectorAll('.box')

// boxEl.addEventListener('click', function() {
//     boxEl.classList.add('active2')
// })

boxEl.forEach(function (boxEl, index) {
    boxEl.classList.add("order-${index + 1}");
    console.log(index, boxEl);
})