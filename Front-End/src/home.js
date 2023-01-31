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
            <td><button onclick="remove(${item.id})">Delete</button></td>
            <td><button onclick="showFormEdit(${item.id})">Edit</button></td>
        </tr>`
            })
            $('#tbody').html(html)
        }
    })

}

function showFormAdd() {
    $('#body').html(`<input type="text" id="name" placeholder="Name">
        <input type="text" id="price" placeholder="Price">
        <input type="text" id="image" placeholder="Image">
        <input type="text" id="category" placeholder="Category">
        <button onclick="add()">Add</button>`)
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
    let category = $('#category').val();
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