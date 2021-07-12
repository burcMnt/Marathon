// JS Array
// 11) 5 elemanlı bir dizi tanımla (metinsel veya numeric). Dizinin son elemanını console a tanımla
let cities=['Balıkesir','İzmir','Muğla','Antalya','Aydın'];
console.log('"LAST ELEMENT OF ARRAY : "');
console.log(cities[4]);
// 12) Tanımladığın dizinin ilk elemanını console a yazdır
console.log('"FIRST ELEMENT OF ARRAY : "');
console.log(cities[0]);

// 13) Tanımladığın dizinin 2. elemanını sil
//delete cities[1];
cities.splice(1,1);
console.log('"AFTER DELETING SECOND ELEMENT : "');
cities.forEach((item)=> {
    console.log(item);
})

// 14) Tanımladığın dizinin 3. elemanınından sonraki elemanları console a yazdır
let newCities=[cities.slice(2)];
console.log('"ELEMENTS OF AFTER THE THIRD INDEX : "');
newCities.forEach((item)=> {
    console.log(item);
})
// 15) bir dizi daha tanımla ve iki diziyi birleştirip tek dizi olarak console a yazdır
let carId=[10,35,48,07,09];
let together=cities.concat(carId);
console.log('"COMBINING TWO DIFFERERNT ARRAYS : "');
together.forEach((item)=> {
    console.log(item);
})
