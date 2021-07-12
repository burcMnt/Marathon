// JS CORE
// 6) 4 propertisi olan bir webUser objesi tanımla ve bu objeyi console a yazdır
let webUser = {
    Name: 'Can',
    Surname: 'Ay',
    Company: 'StarCs',
    FoundingYear: 2020
};
console.log(webUser);

// 7) 4 propertisi olan bir product objesi tanımla ve bu objeyi console a yazdır.
let products ={
    Category:'Electronic',
    Name:'Iphone 12',
    Price:12000,
    Stock:150
}
console.log(products);

// 8) 4 elemanlı metinsel bir dizi tanımla. Her elemanı for ile dönerek console a yazdır
let countries = ['England','Turkey','Italy','Scotland']
console.log('"COUNTRIES :"');
for(var i=0;i<countries.length;i++){
    console.log(countries[i]);
}
// 9) 4 elemanlı sayısal bir dizi tanımla. Her elemanın 1.18 katını for ile dönerek console a yazdır
let numbers= [86,13,128,45]
console.log('"NUMBERS WITH MULTIPLY 1.18 :"');
for(var i=0; i< numbers.length;i++){
    console.log((numbers[i]*1.18).toFixed(2));
}
// 10) 4 elemanlı bir obje dizisi tanımla ve console a yazdır.

let students=[
    {
        Name: 'Cem',
        Surname:'Cünedioglu',
        MobilePhone:'05525552555'
    },
    {
        Name: 'Gözde',
        Surname:'Vural',
        MobilePhone:'05525552556'
    },
    {
        Name: 'Merve',
        Surname:'Ornek',
        MobilePhone:'05525552557'
    },
    {
        Name: 'Beyza',
        Surname:'Arpacıoglu',
        MobilePhone:'05525552558'
    }
]
console.log('"STUDENTS : "');

students.forEach((item)=> {
    let fullName='Name&Surname :'+item.Name+' '+item.Surname+' Mobile: '+item.MobilePhone;
    console.log(fullName);
})