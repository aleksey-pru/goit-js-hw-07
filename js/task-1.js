const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    const title = category.firstElementChild.textContent;
    const elems = category.lastElementChild.children.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elems}`)
})

console.log(`Category: ${title.firstElementChild.textContent}`)