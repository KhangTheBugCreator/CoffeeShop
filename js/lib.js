const products = [
  {
    id: 1,
    name: "Classic Cappuccino",
    image: "../assets/img/coffee1.png",
    price: 65000,
    link: "../html/detail.html",
    desc: "Classic Cappuccino is one of the most popular Italian coffee drinks in the world. It is made from rich espresso, smooth steamed milk, and a soft layer of milk foam on top. The flavor is balanced between the strong bitterness of coffee and the creamy sweetness of milk. This drink is perfect for relaxing in the morning or enjoying a peaceful afternoon at a coffee shop. Served in a warm cup with beautiful latte art, Cappuccino brings a cozy and elegant coffee experience for every customer.",
  },
  {
    id: 2,
    name: "Caramel Latte",
    image: "../assets/img/coffee2.png",
    price: 70000,
    link: "../html/detail.html",
    desc: "Caramel Latte is a sweet and creamy coffee drink loved by many young people. It combines strong espresso with fresh steamed milk and smooth caramel syrup. The caramel flavor adds a gentle sweetness and a soft aroma that perfectly matches the coffee taste. This drink is suitable for people who enjoy coffee but do not like it too bitter. Topped with creamy foam and caramel sauce, Caramel Latte looks beautiful and tastes comforting. It is a great choice for studying, working, or chatting with friends in a relaxing café atmosphere.",
  },
  {
    id: 3,
    name: "Mocha Coffee",
    image: "../assets/img/coffee3.png",
    price: 75000,
    link: "../html/detail.html",
    desc: "Mocha Coffee is a delicious mix of espresso, chocolate, and milk that creates a rich and smooth flavor. The strong coffee taste blends perfectly with sweet chocolate, making this drink both energetic and enjoyable. Mocha is often topped with whipped cream and chocolate powder for a more attractive appearance. It is a perfect drink for chocolate lovers who also enjoy coffee. Whether served hot or iced, Mocha Coffee gives a warm and relaxing feeling. Its sweet aroma and creamy texture make it one of the favorite drinks in modern coffee shops.",
  },
  {
    id: 4,
    name: "Vanilla Cold Brew",
    image: "../assets/img/coffee4.png",
    price: 80000,
    link: "../html/detail.html",
    desc: "Vanilla Cold Brew is a refreshing coffee drink made by slowly brewing coffee beans in cold water for many hours. This process creates a smoother and less acidic flavor compared to regular coffee. The drink is combined with sweet vanilla syrup to add a soft and pleasant aroma. Served with ice, Vanilla Cold Brew is perfect for hot weather and busy days. It has a modern and stylish feeling that is popular among students and office workers. The smooth coffee taste mixed with light vanilla sweetness creates a relaxing and refreshing experience.",
  },
  {
    id: 5,
    name: "Hazelnut Espresso",
    image: "../assets/img/coffee5.png",
    price: 85000,
    link: "../html/detail.html",
    // desc: "Hazelnut Espresso is a strong and aromatic coffee drink designed for true coffee lovers. It uses high-quality espresso combined with hazelnut syrup to create a warm and nutty flavor. The rich aroma of roasted hazelnuts blends beautifully with the deep bitterness of espresso. This drink has a bold taste but still feels smooth and enjoyable. Hazelnut Espresso is often served in a small elegant cup that highlights the premium coffee experience. It is an excellent choice for customers who need energy, focus, and a sophisticated coffee flavor during the day.",
    desc: "omg",
  },
  {
    id: 6,
    name: "Iced Americano",
    image: "../assets/img/coffee6.png",
    price: 60000,
    link: "../html/detail.html",
    desc: "Iced Americano is a simple but refreshing coffee drink made from espresso and cold water served over ice. It has a bold coffee flavor with a light and clean finish that many coffee lovers enjoy every day. This drink is especially popular in hot weather because it feels fresh and energizing. Iced Americano contains less milk and sugar, making it a perfect choice for people who enjoy the original taste of coffee beans. Its strong aroma and smooth bitterness create a modern and relaxing coffee experience for busy mornings and afternoons.",
  },
  {
    id: 7,
    name: "Matcha Latte",
    image: "../assets/img/coffee7.png",
    price: 72000,
    link: "../html/detail.html",
    desc: "Matcha Latte is a smooth and creamy drink made from premium Japanese matcha powder and fresh milk. The natural flavor of green tea blends perfectly with the sweetness of milk to create a balanced and refreshing taste. Matcha Latte is not only delicious but also gives a calm and relaxing feeling thanks to its soft aroma. Served hot or iced, this drink is loved by many students and young people. Its beautiful green color and rich texture make Matcha Latte one of the most attractive drinks in modern coffee shops.",
  },
  {
    id: 8,
    name: "Brown Sugar Milk Coffee",
    image: "../assets/img/coffee8.png",
    price: 78000,
    link: "../html/detail.html",
    desc: "Brown Sugar Milk Coffee is a sweet and creamy drink that combines rich espresso, fresh milk, and thick brown sugar syrup. The caramel-like flavor of brown sugar adds warmth and sweetness that perfectly balances the strong coffee taste. This drink is usually served with ice and has beautiful brown sugar streaks around the cup for a modern café style. The creamy texture and smooth aroma make it very popular among young customers. Brown Sugar Milk Coffee is perfect for relaxing, studying, or enjoying a sweet coffee break during the day.",
  },
  {
    id: 9,
    name: "Espresso Macchiato",
    image: "../assets/img/coffee9.png",
    price: 68000,
    link: "../html/detail.html",
    desc: "Espresso Macchiato is a classic Italian coffee drink made from a strong shot of espresso topped with a small amount of milk foam. The word 'macchiato' means stained, referring to the light layer of milk added to the coffee. This drink keeps the rich and bold flavor of espresso while adding a smoother texture from the foam. Espresso Macchiato is usually served in a small cup and is perfect for people who enjoy strong coffee with a slight creamy touch. It delivers a powerful and elegant coffee experience in every sip.",
  },
  //   {
  //     id: 10,
  //     name: "Chocolate Frappuccino",
  //     image: "../assets/img/coffee10.png",
  //     price: 90000,
  //     link: "../html/detail.html",
  //     desc: "Chocolate Frappuccino is a cold blended drink made from coffee, chocolate syrup, milk, and ice. The smooth texture and rich chocolate flavor create a sweet and refreshing experience that is loved by many young customers. Topped with whipped cream and chocolate sauce, this drink looks attractive and tastes delicious. Chocolate Frappuccino is perfect for relaxing on hot days or enjoying with friends at a café. Its creamy sweetness and icy freshness make it both energizing and comforting, offering a fun and modern coffee shop experience for everyone.",
  //   },
];

const productList = document.getElementById("productList");

function loadAllProduct() {
  productList.innerHTML = "";
  for (const i of products) {
    productList.innerHTML += `
        <div class="productItem">
            <img class="imageProduct"src="${i.image}">
            <h3 class="nameProduct">${i.name}</h3>
            <div class="Price"> 
            Price: <strong>${i.price.toLocaleString()} VND</strong> 
            </div>
            <p class="desc line-clamp line-7">${i.desc}</p>
            <a class="btn" href="${i.link}?id=${i.id}">Detail...</a>
        </div>
    `;
  }
}
