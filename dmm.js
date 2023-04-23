// var hoang='hoang pro vcl'
// console.log('ai la nguoi pro'+hoang);
var mang = [
    'hoang',
    'javasc',
    'toan'
];
console.log(mang.toString())//chuyen array qua string
console.log(typeof mang.toString())
console.log(mang.join(' - '))
//bien aray thanh chuoi
//xoa cuoi mang va tra ve phan tu da xoa
console.log(mang.pop())//dc dungf nhiu lan
console.log(mang)
//them 1pt vao cuoi mang
console.log(mang.push('tien'))
//xoa ptu dau tra ve no.neu xoa het tra ve undefined
console.log(mang.shift())
console.log(mang)
//them vao dau mang tra ve so luong
console.log(mang.unshift('drak','duy hoang'))
console.log(mang)
//xoa bat ki 
mang.splice(1,1)
console.log(mang)//hoang toan
//chen
mang.splice(1,0,'hoho')//1thi javasc se bij xoa va them = drak
console.log(mang)
var mang2=[
    'duy hoang',

];
var mang3=[
    'dell',
    'thich',
    'code'
];
console.log(mang2.concat(mang3))
console.log(mang2.concat(mang3).join('  '))
console.log(mang3.slice(1,2))//thich
/*
foearh() duyet qua ham trong mang kieu liet ke
every() kiem tra tat cung cung la gi ddo tra ve bool
some() chi can 1 ng dung laf tra ve dung
find() tim kiem tra ve 1 ng duy nhat dau tien nos xet dc
filter() tim kiem tra ve tat ca ng ma no thoa man dieu kien
map()
reduce()

*/
var di=[
    {
        id:1,
        name:'duy hoang',
        age:19
    },
    {
        id:2,
        name:'dung tran',
        age:19
    },
    {
        id:3,
        name:'duong phi',
        age:19
    },
    {id:4,
    name:'deo biet',
    age:0
   },
   {
    id:6,
    name:'dung tran',
    age:19
}
];
di.forEach(function(di ,index){
console.log(index,di)
});

var res=di.every(function(di,index){
    console.log(index)//neu ra vi tri
    return di.age === 19;
    //vi tk so 4 bang 0 nen tra ve fasle
});
console.log('ket qua khi so sanh nhung dua 19 tuoi: '+ res)

var res1=di.some(function(di,index){
    console.log(index)//neu ra vi tri
    return di.age === 0;
    //vi tk so 4 bang 0 nen tra ve fasle
});
console.log('ket qua : '+ res1)//cong dc vi la number

var tk=di.find(function(di,index){
    console.log(index)
    //name la chuoi
    return di.name ==='dung tran' ;//ko thao man thi tra ve undefined
});
console.log('ten dung tran ')
console.log(tk)

var ktra2=di.filter(function(di,index){
    console.log(index)
    return di.name === 'dung tran';
});
var dk1='nhung  ng ten dung tran trong mang';
console.log(dk1)
console.log(ktra2)
//tinh tong 2 so in len html
let a=20;
let b=30;
let sum=a+b;
document.write("hoang dell thich code nhung lai hoc code");
document.write('  tong 2 so a va b ='+sum);
console.log('tong la '+sum)

// function sum1(a,b){
//     return a+b;
// }
// let sum1=(a,b)=>{
//     return a+b;
// };
//nhap vao
function sum1(){
    let a =Number(document.getElementById("so 1").value);
    let b =Number(document.getElementById("so 2").value);
    let tong=parseInt(a)+b;
    document.getElementById('result').innerHTML ='tong'
}//dung number ep string qua number
// neu ko truyen j vo ham trung gian thi newfuction ko chay dc tra ve undefined
function moi(di, index){//neu can mang cu dung ,originArray  vo tham so t3
    // console.log(age)
    // return 123;
    // return age;
    return {
        id :di.id,
        name:`hoten: ${di.name}`,
        age:di.age,
        gioitinh:`gia: ${di.age}`,
        index:index,
        //aray cu
        // originArray:originArray,
    };
}

var newfuction=di.map(moi);

console.log(newfuction)
// luu 1 gia trij nao do cuar mang vao mang khac
function moi2(thay,index){
    return thay.name; 
}
var kq2=di.map(moi2);
console.log('ten :'+kq2)
//ung dung thuc te map dung de 
function moi3(thay,index){
    return `<h2>${thay.name}</h2>`;
}
var kq3=di.map(moi3);
console.log(kq3.join(''));
//  <h2> duy hoang</h2><h2> dung tran</h2><h2> duong phi</h2><h2> deo biet</h2><h2> dung tran</h2>
//hàm
function ham1(){
    alert('hoang dell thich code !');
} 
//goi ham
ham1();
// truyen tham so
function ham2(a, b) {
    console.log(a);
    console.log(b);
}
ham2('cuu thay','duma sap rot mon anh ');
console.log(1,2,3,4,5)
//giomhg truyen mang
function ham3() {
    console.log(arguments)
}
ham3('duy','hoang')
//vong lap
function vong(){
    var res=' ';
    for(var c of arguments){
        console.log(c)
        res+=`${c} - `
    }
    console.log(res)
}
vong('1','2','3,4,5,6')
function cong(a,b){
    return a-b
}
console.log('ket qua phep tinh ' +cong(6,4))
//in so le
var array1=[
    1,5,7,8,9,15,8,5
]
 for(var i=0;i<array1.length;i++)
 {
    if(array1[i]%2!=0)
    console.log(array1[i])
 }
 //so chan
 function sochan(a){
    for(var i=0;i<a.length;i++){
        if(a[i]%2==0)
        console.log(a[i])
    }
 }
 console.log('so cahn trong mang ')
 sochan(array1)
 //so lon =5
 function so5(a){
    for(var i=0;i<a.length;i++){
        if(a[i]>=5)
        console.log(a[i])
    }
 }
 console.log('so lon ho hoac bang 5 ')
 so5(array1)
 //cong so chia het 5
 var s=0;
 function tong5(a){
    for(var i=0;i<a.length;i++){
        if(a[i]%5==0)
        s+=a[i]
    }
    console.log(s);
 }
 console.log('tong cac so chia het cho 5')
 tong5(array1)
 console.log('tich 3 so dau mang ')
 console.log(array1[0 ]*  array1[1]*  array1[2])
//tim so 5
 function tim(a){
    var cnt=0;
    for(var i=0;i<a.length;i++){
        if(a[i]===5){
            cnt++;
            console.log(a[i])
            console.log('co '+cnt +' so 5 trong mag')
        }
    }
 }
 tim(array1)
 //ptu cuoi
 console.log('tong 3 ptu cuoi mang')
 console.log(+array1[array1.length-1]+array1[array1.length-2]+array1[array1.length-3]);
//obj
var obj={
    ho: 'Lê',
    ten: 'Hoàng'
}
console.log('ho va ten :'+obj.ho+' '+obj.ten)
////ddinh nghia doi tg
var car={
    hang : 'honda',
    gia: 5000,
    made :'china'
}
car.gia =15000
car.mau = 'huong nam tinh'
//muon xoa thi
// delete car.gia
console.log(car)
 var flag= 'hang xe '+car.hang+' '+'mau ' +car.mau +' '+'xuat xu '+car.made+' '+'gia thanh '+car.gia
 console.log(flag)