//Trang giới thiệu
function Introduce() {
  var ejsFilePath = "/page/introduce.ejs";
  var targetElement = document.getElementById("root");
  fetch(ejsFilePath)
    .then((response) => response.text())
    .then((data) => {
      targetElement.innerHTML = data;
    })
    .catch((error) => console.error("Error fetching HTML file:", error));
}
//Trang sản phẩm Admin
function ProductList() {
  var ejsFilePath = "/page/product/product.list.ejs";
  var root = document.getElementById("root");
  var data;
  axios.get("http://jul2nd.ddns.net/product").then((response) => {
    data = response.data;
    fetch(ejsFilePath)
      .then((response) => response.text())
      .then((data) => {
        const renderedHtml = ejs.render(data, {
          titlePage: "Sản phẩm",
          data: response.data,
        });
        root.innerHTML = renderedHtml;
        var productController = document.createElement("script");
        productController.src = "/js/product.controller.js";
        root.appendChild(productController);
      })
      .catch((error) => console.error("Error fetching EJS file:", error));
  });
}
//Trang sản phẩm khách hàng
function ProductView() {
  var ejsFilePath = "/page/product/product.view.ejs";
  var root = document.getElementById("root");
  var data;
  axios.get("http://jul2nd.ddns.net/product").then((response) => {
    data = response.data;
    fetch(ejsFilePath)
      .then((response) => response.text())
      .then((data) => {
        const renderedHtml = ejs.render(data, {
          titlePage: "Sản phẩm",
          data: response.data,
        });
        root.innerHTML = renderedHtml;
        var productController = document.createElement("script");
        productController.src = "/js/product.controller.js";
        root.appendChild(productController);
      })
      .catch((error) => console.error("Error fetching EJS file:", error));
  });
}
//Trang liên hệ
function Contact() {
  var ejsFilePath = "/page/contact.ejs";
  var root = document.getElementById("root");
  fetch(ejsFilePath)
    .then((response) => response.text())
    .then((data) => {
      const renderedHtml = ejs.render(data, { titlePage: "Liên hệ" });
      root.innerHTML = renderedHtml;
    })
    .catch((error) => console.error("Error fetching EJS file:", error));
}

function changeActiveState(element) {
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  element.classList.add("active");
}
//trang nhãn hiệu admin
function BrandList() {
  var ejsFilePath = "/page/brand/brand.list.ejs";
  var root = document.getElementById("root");
  var data;
  axios.get("http://jul2nd.ddns.net/brand").then((response) => {
    data = response.data;
    fetch(ejsFilePath)
      .then((response) => response.text())
      .then((data) => {
        const renderedHtml = ejs.render(data, {
          titlePage: "Nhãn hiệu",
          data: response.data,
        });
        root.innerHTML = renderedHtml;
        var brandController = document.createElement("script");
        brandController.src = "/js/brand.controller.js";
        root.appendChild(brandController);
      })
      .catch((error) => console.error("Error fetching EJS file:", error));
  });
}
//trang category admin
function CategoryList() {
  var ejsFilePath = "/page/category/category.list.ejs";
  var root = document.getElementById("root");
  var data;
  axios.get("http://jul2nd.ddns.net/category").then((response) => {
    data = response.data;
    fetch(ejsFilePath)
      .then((response) => response.text())
      .then((data) => {
        const renderedHtml = ejs.render(data, {
          titlePage: "Loại sản phẩm",
          data: response.data,
        });
        root.innerHTML = renderedHtml;
        var categoryController = document.createElement("script");
        categoryController.src = "/js/category.controller.js";
        root.appendChild(categoryController);
      })
      .catch((error) => console.error("Error fetching EJS file:", error));
  });
}
//trang account admin
function AccountList() {
  var ejsFilePath = "/page/account/account.list.ejs";
  var root = document.getElementById("root");
  var data;
  axios.get("http://jul2nd.ddns.net/account").then((response) => {
    data = response.data;
    fetch(ejsFilePath)
      .then((response) => response.text())
      .then((data) => {
        const renderedHtml = ejs.render(data, {
          titlePage: "Tài khoản",
          data: response.data,
        });
        root.innerHTML = renderedHtml;
        var accountController = document.createElement("script");
        accountController.src = "/js/account.controller.js";
        root.appendChild(accountController);
      })
      .catch((error) => console.error("Error fetching EJS file:", error));
  });
}
//trang cart
function CartList() {
  var ejsFilePath = "/page/cart/cart.list.ejs";
  var root = document.getElementById("root");
  var data;
  axios
    .get("http://jul2nd.ddns.net/cart/" + getCookie("id"))
    .then(response => {
      data = response.data;
      fetch(ejsFilePath)
        .then(response => response.text())
        .then(data => {
          const renderedHtml = ejs.render(data, {
            titlePage: "Giỏ hàng",
            data: response.data,
          });
          root.innerHTML = renderedHtml;
          var cartController = document.createElement("script");
          cartController.src = "/js/cart.controller.js";
          root.appendChild(cartController);
        })
        .catch((error) => console.error("Error fetching EJS file:", error));
    });
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


//trang post
function PostList() {
  var ejsFilePath = "/page/post/post.list.ejs";
  var root = document.getElementById("root");
  var data;
  axios
    .get("http://jul2nd.ddns.net/post")
    .then(response => {
      data = response.data;
      fetch(ejsFilePath)
        .then(response => response.text())
        .then(data => {
          const renderedHtml = ejs.render(data, {
            titlePage: "Post",
            data: response.data,
          });
          root.innerHTML = renderedHtml;
          var postController = document.createElement("script");
          postController.src = "/js/post.controller.js";
          root.appendChild(postController);
        })
        .catch((error) => console.error("Error fetching EJS file:", error));
    });
}