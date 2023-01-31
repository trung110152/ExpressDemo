showHome();

function showList() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
            'Content-Type': 'application/json',
        },
        success: (products) => {
            console.log(products);
            let html = '';
            products.map(item => {
                html += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.image}</td>
            <td>${item.nameCategory}</td>
            <td><button onclick="remove(${item.id})">Delete</button></td>
            <td><button onclick="showFormEdit(${item.id})">Edit</button></td>
        </tr>`
            })
            $('#tbody').html(html)
        }
    })

}

function getCategoriesCreate() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/products/getCategories',
        headers: {
            'Content-Type': 'application/json',
        },
        success: (categories) => {
            console.log(categories)
            let Categories = ``;
            for (const category of categories) {
                Categories += `
                    <option value=${category.id}>${category.name}</option>
                `
            }
            $('#categoryAdd').html(Categories);
        }
    })
}

function showFormAdd() {
    $('#body').html(` <input type="text" id = "name" placeholder="name"> 
             <input type="number" id = "price" placeholder="price"> 
             <input type="text" id = "image" placeholder="image">
             <select id="categoryAdd">
             <option selected>Category</option>
             </select>
    <button onclick="add()">Add</button>`)
    getCategoriesCreate();
}

function showHome() {
    $('#body').html(`
    <table border="1">
        <thead>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Image</td>
            <td>Category</td>
            <td colspan="2">Action</td>
        </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
    </table>`)
    showList();
}

function add() {
    let name = $('#name').val();
    let price = $('#price').val();
    let image = $('#image').val();
    let category = $('#categoryAdd').val();
    let product = {
        name: name,
        price: price,
        image: image,
        category: category
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(product),

        success: () => {
            showHome()
        }
    })
}

function remove(id){
    $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/products/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        success: () => {
            showHome();
        }
    })
}

function showFormEdit(id){
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/products/findById/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        success: (product) => {
            $('#body').html(`
<input type="text" id="name" placeholder="Name" value="${product.name}">
        <input type="text" id="price" placeholder="Price" value="${product.price}">
        <input type="text" id="image" placeholder="Image" value="${product.image}">
        <input type="text" id="category" placeholder="Category" value="${product.category}">
        <button onclick="edit(${id})">Edit</button>`)
        }
    })

}

function edit(id) {
    let name = $('#name').val();
    let price = $('#price').val();
    let image = $('#image').val();
    let category = $('#category').val();
    let product = {
        name: name,
        price: price,
        image: image,
        category: category
    }
    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/products/${id}`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(product),

        success: () => {
            showHome()
        }
    })
}