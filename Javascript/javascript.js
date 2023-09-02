


// 3+2*4/2*3*3+2-5
// let a=2
// let b=3
// let c=4
// let d=5
// let e=((a+b)*c)/(a*b*b)+a-d;
// console.log(e);

// let x=6;
// let y=5;
// let hasil=x>y;


// if(x>y){
//     console.log("Benar");
// }else {
//     console.log("Salah");
// }

let kkm=75
let nilai=70
let hasil =kkm<nilai

if(kkm<nilai){
    console.log("kamu lulus")
}else{
    console.log("kamu tidak lulus")
}

let bulan=1;
let tanggal=2;
let zodiak="belum dibuat"

if(bulan=1){
    if(tanggal>0 && tanggal<20){
        zodiak="Aquarius";
    }
    if (tanggal>19 && tanggal<32){
    zodiak="Cancer";
    } 
}
if(bulan==2){
    if(tanggal>0 && tanggal<20){
        zodiak="Capricorn";
    }
    if(tanggal<19 && tanggal<32){
        zodiak="Libra";
    }
}
if(bulan==3){
    if(tanggal>0 && tanggal<20){
        zodiak="Leo";
    }
    if(tanggal<19 && tanggal<32){
        zodiak="Taurus";
    }
}
console.log(zodiak);
