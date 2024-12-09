const duken = {
    name: "ADIDAS",
    phoneNumber: "+77770000000",
    products: [
      {
        productName: "Ноутбук ",
        category: "Электроника",
        price: 350000,
        stock: 10
      },
      {
        productName:"Телефон",
        category:"Сварка",
        price:200000,
        stock: 20
      },
      {
        productName:"Айфон 17 ултра про макс",
        category:"сенсор",
        price:100000000,
        stock:1
      },
      {
      productName: "Комбайн",
      category: "Үй техникасы",
      price: 150000,
      stock: 2000
    },
    {
      productName: "Қара шай Апамнын Шайы",
      category: "Азық-түлік",
      price: 1000,
      stock: 1001
    },
    {
      productName: "пылесос",
      category: "Үй техникасы",
      price: 200000,
      stock: 11
    }
    ]
    }
    console.log(duken);
     






        function changeShopName() {
        const newShopName = prompt("Дүкеннің жаңа атауын енгізіңіз:");
        if (newShopName) {
            const shopNameElement = document.getElementById("shop-name");
            if (shopNameElement) {
                shopNameElement.textContent = newShopName;
                console.log(`Дүкен атауы "${newShopName}" болып өзгертілді.`);
            } else {
                console.error("Дүкен атауы көрсетілген элемент табылмады.");
            }
        } else {
            console.log(changeShopName);
        }
    }

