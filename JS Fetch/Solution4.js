// JS fetch ( lütfen tüm fecth işlemleri ayrı ayrı yazılsın. copy paste yapmayalım )
// 16) https://northwind.vercel.app/api/categories den dataları çekip console a yazdır

fetch('https://northwind.vercel.app/api/categories')
    .then((res) => res.json())
    .then((data) => {
        console.log('" 16- CATEGORİES FROM NORTHWIND "');
        data.map((item) => {
            console.log(item.name + '  ' + item.description);
        })
    })

// 17) https://northwind.vercel.app/api/categories adresinde kaç data olduğunu çekip console a yazdır

fetch('https://northwind.vercel.app/api/categories')
    .then((res) => res.json())
    .then((data) => {
        var count = 0;
        data.map((item) => {
            count++;
        })
        console.log('" 17-QUANTITY OF CATEGORY FROM NORTHWIND "');
        console.log(count);
    })

// 18) https://northwind.vercel.app/api/customers adresindeki dataları çekip console a yazdır
fetch('https://northwind.vercel.app/api/customers')
    .then((res) => res.json())
    .then((data) => {
        console.log('" 18-CUSTOMERS FROM NORTHWIND "');
        data.map((item) => {
            console.log(item);
        })
    })

// 19) https://northwind.vercel.app/api/products ürünlerin unitPrice toplamını console a yazdır.( önce çektiğimiz array da herhangi bir 
//döngüyle döneceğiz. Sonra scope dışında tanımladığımız bir toplam değerine bu değerleri ekleyip console da yazdıracağız)
fetch('https://northwind.vercel.app/api/products')
    .then((res) => res.json())
    .then((data) => {
        var sum = 0;
        data.map((item) => {
            sum = sum + item.unitPrice;
        })

        console.log('" 19-SUM OF UNITPRİCE FROM NORTHWIND OF PRODUCTS"');
        console.log(sum);
    })



// 20) **  https://northwind.vercel.app/api/orders country değeri USA olan siparişleri console a yazdır
fetch('https://northwind.vercel.app/api/orders')
    .then((res) => res.json())
    .then((data) => {
        console.log('" 20-COUNTRY = USA ORDERS FROM NORTHWIND"');
        data.map((item) => {
            if (item.shipAddress.country === "USA") {
                console.log(item);
            }
        })
    })

// 21) ***** https://northwind.vercel.app/api/orders her bir siparişin TOPLAM tutarını console a yazdır
fetch('https://northwind.vercel.app/api/orders')
    .then((res) => res.json())
    .then((data) => {
        console.log('"21-SUM OF ORDERS PRICE FROM NORTHWIND OF ORDERS"');
        data.map((item) => {
            var a = Number(item.details[0].unitPrice);
            var b = Number(item.details[0].quantity);
            var sum3 = a * b;
            console.log('CustomerId: ' + item.customerId + '   Total price of order: ' + sum3.toFixed(2));

        })

    })

// // 22) Ekrana 3 input ve bir buton koy. Butona tıkladığında https://northwind.vercel.app/api/suppliers adresine bir data POST etsin.
// // ( fetch POST işlemi )

function add() {
    let val1 = document.getElementById('in1').value;
    let val2 = document.getElementById('in2').value;
    let val3 = document.getElementById('in3').value;

    let newSupp = {
        companyName: val1,
        contactName: val2,
        contactTitle: val3
    };

    let requestOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        //js objesini json a çevirir
        body: JSON.stringify(newSupp)
    }

    fetch('https://northwind.vercel.app/api/suppliers', requestOptions)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
}
