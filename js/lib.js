const defaultProducts = [
  {
    id: 1,
    name: "Classic Cappuccino",
    image: "../assets/img/coffee1.png",
    price: 65000,
    link: "../html/detail.html",
    desc: "Classic Cappuccino là một trong những loại cà phê Ý nổi tiếng nhất trên thế giới. Thức uống này được pha từ espresso đậm đà, sữa nóng mịn và một lớp bọt sữa mềm phía trên. Hương vị cân bằng giữa vị đắng mạnh của cà phê và vị béo ngọt của sữa. Đây là lựa chọn hoàn hảo để thư giãn vào buổi sáng hoặc tận hưởng một buổi chiều yên bình tại quán cà phê. Được phục vụ trong chiếc ly ấm cùng nghệ thuật latte đẹp mắt, Cappuccino mang đến trải nghiệm cà phê ấm cúng và sang trọng cho mọi khách hàng.",
  },
  {
    id: 2,
    name: "Caramel Latte",
    image: "../assets/img/coffee2.jpg",
    price: 70000,
    link: "../html/detail.html",
    desc: "Caramel Latte là một loại cà phê ngọt ngào và béo mịn được rất nhiều bạn trẻ yêu thích. Thức uống kết hợp espresso đậm vị với sữa nóng và siro caramel mềm mượt. Hương caramel tạo nên vị ngọt dịu cùng mùi thơm dễ chịu hòa quyện hoàn hảo với vị cà phê. Đây là lựa chọn phù hợp cho những ai thích cà phê nhưng không muốn vị quá đắng. Được phủ lớp bọt sữa và sốt caramel hấp dẫn, Caramel Latte mang lại cảm giác thư giãn và thoải mái khi học tập, làm việc hay trò chuyện cùng bạn bè.",
  },
  {
    id: 3,
    name: "Mocha Coffee",
    image: "../assets/img/coffee3.png",
    price: 75000,
    link: "../html/detail.html",
    desc: "Mocha Coffee là sự kết hợp thơm ngon giữa espresso, chocolate và sữa tạo nên hương vị đậm đà và mịn màng. Vị cà phê mạnh hòa quyện hoàn hảo cùng vị ngọt của chocolate giúp thức uống vừa tràn đầy năng lượng vừa dễ thưởng thức. Mocha thường được phủ kem tươi và bột chocolate để tăng thêm sự hấp dẫn. Đây là lựa chọn tuyệt vời cho những người yêu thích chocolate nhưng vẫn muốn tận hưởng hương vị cà phê. Dù uống nóng hay lạnh, Mocha Coffee luôn mang đến cảm giác ấm áp và thư giãn.",
  },
  {
    id: 4,
    name: "Vanilla Cold Brew",
    image: "../assets/img/coffee4.png",
    price: 80000,
    link: "../html/detail.html",
    desc: "Vanilla Cold Brew là thức uống cà phê mát lạnh được pha bằng cách ủ cà phê trong nước lạnh suốt nhiều giờ. Quá trình này tạo nên hương vị mượt mà và ít chua hơn cà phê thông thường. Thức uống được kết hợp cùng siro vanilla ngọt dịu mang đến mùi thơm nhẹ nhàng và dễ chịu. Được phục vụ cùng đá lạnh, Vanilla Cold Brew rất phù hợp cho những ngày nóng bức và bận rộn. Hương vị cà phê mềm mượt kết hợp với vị vanilla nhẹ tạo nên trải nghiệm thư giãn và sảng khoái.",
  },
  {
    id: 5,
    name: "Hazelnut Espresso",
    image: "../assets/img/coffee5.jpg",
    price: 85000,
    link: "../html/detail.html",
    desc: "Hazelnut Espresso là thức uống cà phê đậm đà và thơm nồng dành cho những người yêu thích hương vị cà phê mạnh. Espresso chất lượng cao được kết hợp cùng siro hạt phỉ tạo nên mùi thơm ấm áp và vị béo đặc trưng. Hương thơm của hạt phỉ rang hòa quyện tuyệt vời với vị đắng sâu của espresso. Thức uống có hương vị mạnh nhưng vẫn mượt mà và dễ uống. Hazelnut Espresso thường được phục vụ trong chiếc ly nhỏ sang trọng, mang đến trải nghiệm cà phê tinh tế và đầy năng lượng.",
  },
  {
    id: 6,
    name: "Iced Americano",
    image: "../assets/img/coffee6.jpg",
    price: 60000,
    link: "../html/detail.html",
    desc: "Iced Americano là loại cà phê đơn giản nhưng đầy sảng khoái được pha từ espresso và nước lạnh cùng đá viên. Thức uống có hương vị cà phê đậm nhưng hậu vị nhẹ và thanh mát, được nhiều người yêu thích mỗi ngày. Đây là lựa chọn rất phổ biến trong thời tiết nóng vì mang lại cảm giác tươi mới và tỉnh táo. Iced Americano chứa ít sữa và đường nên phù hợp với những ai muốn thưởng thức hương vị nguyên bản của hạt cà phê. Mùi thơm mạnh cùng vị đắng nhẹ tạo nên trải nghiệm cà phê hiện đại và thư giãn.",
  },
  // {
  //   id: 7,
  //   name: "Matcha Latte",
  //   image: "../assets/img/coffee7.jpg",
  //   price: 72000,
  //   link: "../html/detail.html",
  //   desc: "Matcha Latte là thức uống mềm mịn được làm từ bột matcha Nhật Bản cao cấp và sữa tươi. Hương vị trà xanh tự nhiên hòa quyện cùng vị ngọt béo của sữa tạo nên cảm giác cân bằng và dễ chịu. Matcha Latte không chỉ thơm ngon mà còn mang lại cảm giác thư giãn nhờ hương thơm nhẹ nhàng đặc trưng. Dù uống nóng hay lạnh, thức uống này vẫn rất được học sinh và giới trẻ yêu thích. Màu xanh đẹp mắt cùng kết cấu mịn màng giúp Matcha Latte trở thành một trong những món uống nổi bật tại quán cà phê hiện đại.",
  // },
  // {
  //   id: 8,
  //   name: "Brown Sugar Milk Coffee",
  //   image: "../assets/img/coffee8.jpg",
  //   price: 78000,
  //   link: "../html/detail.html",
  //   desc: "Brown Sugar Milk Coffee là thức uống ngọt béo kết hợp giữa espresso đậm vị, sữa tươi và siro đường nâu đặc sánh. Hương vị caramel của đường nâu mang lại cảm giác ấm áp và vị ngọt hài hòa với cà phê mạnh. Thức uống thường được phục vụ cùng đá lạnh và có những vệt đường nâu đẹp mắt quanh ly theo phong cách quán cà phê hiện đại. Kết cấu mịn cùng hương thơm dịu khiến món này rất được giới trẻ yêu thích. Đây là lựa chọn hoàn hảo để thư giãn, học tập hoặc tận hưởng khoảng thời gian nghỉ ngơi ngọt ngào.",
  // },
  // {
  //   id: 9,
  //   name: "Espresso Macchiato",
  //   image: "../assets/img/coffee9.jpg",
  //   price: 68000,
  //   link: "../html/detail.html",
  //   desc: "Espresso Macchiato là loại cà phê Ý cổ điển được pha từ một shot espresso mạnh cùng một lớp bọt sữa nhỏ phía trên. Từ 'macchiato' có nghĩa là được đánh dấu, ám chỉ lớp sữa nhẹ phủ lên cà phê. Thức uống vẫn giữ được hương vị đậm và mạnh của espresso nhưng có thêm độ mềm mịn từ bọt sữa. Espresso Macchiato thường được phục vụ trong ly nhỏ và phù hợp với những ai yêu thích cà phê mạnh nhưng vẫn muốn có chút vị béo nhẹ. Mỗi ngụm đều mang lại trải nghiệm cà phê tinh tế và đầy năng lượng.",
  // },
  // {
  //   id: 10,
  //   name: "Chocolate Frappuccino",
  //   image: "../assets/img/coffee10.jpg",
  //   price: 90000,
  //   link: "../html/detail.html",
  //   desc: "Chocolate Frappuccino là thức uống đá xay được pha từ cà phê, chocolate, sữa và đá lạnh. Kết cấu mịn cùng hương vị chocolate đậm đà tạo nên cảm giác ngọt ngào và sảng khoái được nhiều bạn trẻ yêu thích. Phía trên thường được phủ kem tươi và sốt chocolate hấp dẫn giúp thức uống càng thêm bắt mắt. Chocolate Frappuccino rất phù hợp để thư giãn vào những ngày nóng hoặc thưởng thức cùng bạn bè tại quán cà phê. Vị ngọt béo và sự mát lạnh mang đến trải nghiệm hiện đại, vui vẻ và đầy năng lượng cho mọi khách hàng.",
  // },
];

// load Default ra mot mang products de modify

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(defaultProducts));
}
let products = JSON.parse(localStorage.getItem("products"));
//luu mang products ve dang chuoi va luu vao localStorage
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}
//load all san pham
const productList = document.getElementById("productList");
function loadAllProduct() {
  productList.innerHTML = "";
  for (const i of products) {
    // them 2 nut xoa va suâ
    let adminButton = "";
    if (isEditMode == true) {
      adminButton += `
        <div class="admin">
          <div class="btn" onclick="deleteProduct(${i.id})">Xóa</div>
          <div class="btn" onclick="editProduct(${i.id})">Sửa</div>
        </div>
      `;
    } else {
      adminButton = "";
    }
    //them mot product vao list
    productList.innerHTML += `
        <div class="productItem">
            <img class="imageProduct" src="${i.image}" alt="${i.name}">
            <h3 class="nameProduct">${i.name}</h3>
            <div class="Price"> 
            Giá: <strong>${i.price.toLocaleString()} VND</strong> 
            </div>
            <p class="desc line-clamp line-5 break-all">${i.desc}</p>
            <div class="action">
              <a target="_blank" class="btn" href="${i.link}?id=${i.id}#section1">Chi tiết...</a>
              ${adminButton}
            </div>
        </div>
    `;
  }
}
//them (form) khung nhap thong tin san pham
const addModal = document.getElementById("addModal");

function openAddModal() {
  addModal.classList.add("show"); //them class showw de no hien ra man hinh
}

function closeAddModal() {
  addModal.classList.remove("show"); //nguoc lai cai tren
}
//them san pham
function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;
  const desc = document.getElementById("productDesc").value;

  if (!name || !price || !image || !desc) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }
  // sua
  if (currentEditId !== null) {
    const product = products.find((item) => item.id === currentEditId);

    product.name = name;
    product.price = Number(price);
    product.image = image;
    product.desc = desc;

    currentEditId = null;
  }

  // them
  else {
    const newProduct = {
      id: Date.now(),
      name: name,
      image: image,
      price: Number(price),
      link: "../html/detail.html",
      desc: desc,
    };

    products.push(newProduct);
  }

  saveProducts();
  loadAllProduct();
  closeAddModal();

  name.value = "";
  price.value = "";
  image.value = "";
  desc.value = "";
}
// bat tat che do chinh sua
let isEditMode = false;
const addButton = document.querySelector(".btn.addProduct");
function batTatEdit() {
  isEditMode = !isEditMode; //chuyen trang thai
  //them nut them san pham
  if (isEditMode) {
    addButton.classList.add("show");
  } else {
    addButton.classList.remove("show");
  }
  //load lai list neu la che do chinh sua (isEditMode) thi no se co nut sua xoa cho moi phan tu
  loadAllProduct();
}

//xoa product
function deleteProduct(id) {
  products = products.filter((item) => item.id !== id);

  saveProducts();
  loadAllProduct();
}
//ham sua (su dung lai ham addProduct)
let currentEditId = null;
function editProduct(id) {
  currentEditId = id;
  const product = products.find((item) => item.id === id);
  openAddModal();
  // gia tri mac dinh cua modal la gia tri cua id dang sua
  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productImage").value = product.image;
  document.getElementById("productDesc").value = product.desc;
}
