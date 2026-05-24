const productDetail = document.getElementById("productDetail");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find((item) => item.id === id);

if (product) {
  productDetail.innerHTML = `
    <div class="detailItem">
      <img src="${product.image}" alt="${product.name}" class="detailImage">

      <div class="detailContent">
        <h1>${product.name}</h1>

        <p class="detailPrice">
          Giá: <strong>${product.price.toLocaleString()}</strong> VND
        </p>

        <p class="detailDesc break-all">
          ${product.desc}
        </p>

        <button class="btn">
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  `;
}
