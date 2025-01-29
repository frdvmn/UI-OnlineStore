const products = document.querySelectorAll(".product");

if (products) {
    products.forEach(product => {
        const imageSwitchItems = product.querySelectorAll(".image-switch__item");
        const imagePagination = product.querySelector(".image-pagination");

        if (imageSwitchItems.length > 1) {
            imageSwitchItems.forEach((image, index) => {
                image.setAttribute('data-index', String(index));
                imagePagination.innerHTML += `<li class="image-pagination__item ${index === 0 ? 'image-pagination__item--active' : ''}" data-index="${index}"></li>`;

                image.addEventListener("mouseenter", (ev) => {
                    product.querySelectorAll(".image-pagination__item").forEach(el => {el.classList.remove("image-pagination__item--active");})
                    product.querySelector(`.image-pagination__item[data-index="${index}"]`).classList.add("image-pagination__item--active");
                })
                image.addEventListener("mouseleave", (ev) => {
                    product.querySelectorAll(".image-pagination__item").forEach(el => {el.classList.remove("image-pagination__item--active");})
                    product.querySelector(`.image-pagination__item[data-index="${0}"]`).classList.add("image-pagination__item--active");
                })

            })
        }
    })
}