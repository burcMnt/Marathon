// 1) Ekrana bir input bir buton koy. Butona tıkladığında inputtan aldığı verinin karesini console a yazdırsın

function square() {
    let val = document.getElementById('sqVal').value;
    console.log(Number(val * val));
}

// 2) Ekrana bir 3 input bir buton koy. Butona tıkladığında en büyük sayıyı ekrana yazdırsın

function bigOne() {
    var val1 = document.getElementById('val1').value;
    var val2 = document.getElementById('val2').value;
    var val3 = document.getElementById('val3').value;
    var max;

    if (val1 > val2 && val1 > val3) {
        max = val1;
    }
    else if (val2 > val1 && val2 > val3) {
        max = val2;
    }
    else if (val3 > val1 && val3 > val2) {
        max = val3;
    }
    console.log(max);
}
// 3) Ekrana bir input bir buton koy. Butona tıkladığında inputtan aldığı değeri büyük harfle console yazdırsın ( toUpper metodu ile)

function toUpper() {
    let valueUpp = document.getElementById('value').value;
    console.log(valueUpp.toUpperCase());
}
// 4) Ekrana bir input bir buton koy. Butona tıkladığında inputa girilen sayıya kadar olan sayıların toplamını console a yazdırsın
function sum(){
    let inpt=document.getElementById('num').value;
    var tmp=0;

    for(var i=0; i<=inpt;i++){
        tmp = tmp+i;
    }

    console.log(tmp);
}
// 5) Ekrana bir input bir buton koy. 
//Butona tıkladığında inputtaki sayı kadar butonu ekrana append etsin.

function addBtn(){
    let num1=document.getElementById('num1').value;

    for(var i=0; i<num1;i++){
        let newbtn=document.createElement('button');
        newbtn.style.margin='5px';
        newbtn.innerHTML=(i+1)+' new btn';
        document.getElementById('bdy').appendChild(newbtn);
    }
}