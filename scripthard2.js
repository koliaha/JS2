let num = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let b = prompt("Input num: ");
for (let i = 0; i < num.length; i++) {
    if (i == b) {
        document.write(num[i].italics() + '<br>');   
    } else if (i<5) {
        document.write(num[i] + '<br>');
    } else {
        document.write(num[i].bold() + '<br>');   
    }
}
/////////////////////////////////////////////////////

let arr = [];
for (let i = 0; i < 7; i++) {
    let m;
   arr[i] = Math.floor(Math.random() * 100);
   document.write(arr[i] + '<br>');  
    m = String(arr[i]);
    if (m[0] == 3 || m[0] == 7) {
       console.log(arr[i]);
    }
}
