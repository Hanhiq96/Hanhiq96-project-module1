let luuLocal = JSON.parse(localStorage.getItem("admin"));
      
        function addProduct() {
          let name = document.getElementById("name").value;
          let price = document.getElementById("price").value;
          let soluong = document.getElementById("soluong").value;
          let image = document.getElementById("productImage").src;
          let valueList = {
            stt: 1,
            name: name,
            price: price,
            soluong: soluong,
            image: image,
          }
          let luuLocal = JSON.parse(localStorage.getItem("admin"));
          if (luuLocal == null) {
            luuLocal = [];
            localStorage.removeItem("admin");
          }
          luuLocal.push(valueList);
          localStorage.setItem("admin", JSON.stringify(luuLocal));
          document.getElementById("name").value = "";
          document.getElementById("price").value = "";
          document.getElementById("soluong").value = "";
          document.getElementById("productImage").src = "";
          renderList();
        }
      
        function renderList() {
          let saveLocaal = JSON.parse(localStorage.getItem("admin"));
          if (saveLocaal == null) {
            return;
          }
          let result =
            `
            <tr>
              <td>STT</td>
              <td>Product image</td>
              <td>Product name</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          `
          for (let i = 0; i < saveLocaal.length; i++) {
            result +=
              `
            <tr>
              <td>${i + 1}</td>
              <td><img src="${saveLocaal[i].image}" alt="Product image"></td>
              <td>${saveLocaal[i].name}</td>
              <td>${saveLocaal[i].price}</td>
              <td>${saveLocaal[i].soluong}</td>
              <td>
                <button onclick="suabutton(${i})">Edit</button>
              </td>
              <td>
                <button onclick="xoaButton(${i})">Delete</button>
              </td>
            </tr>
            `
          }
          document.getElementById("table").innerHTML = result;
        }
        renderList();
        function imgProduct(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("productImage").src = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}
function xoaButton(xoa) {
    let saveLocaal = JSON.parse(localStorage.getItem("admin"));
    saveLocaal.splice(xoa, 1);
    localStorage.setItem("admin", JSON.stringify(saveLocaal));
    renderList();
}
function suabutton(sua) {
    let saveLocaal = JSON.parse(localStorage.getItem("admin"));
    document.getElementById("name").value = saveLocaal[sua].name;
    document.getElementById("price").value = saveLocaal[sua].price;
    document.getElementById("update").onclick = function () {
        let valueList = {
            stt: saveLocaal[sua].stt,
            product: document.getElementById("name").value,
            price: document.getElementById("price").value,
        }
    }
}