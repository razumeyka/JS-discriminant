const a = parseFloat(prompt('enter "a" value'));
const b = parseFloat(prompt('enter "b" value'));
const c = parseFloat(prompt('enter "c" value'));

document.write(solveQuadr(a,b,c));

function discr (a,b,c) {
     return b*b-4*a*c;
}

function solveQuadr (a,b,c) {
    const d = discr(a,b,c);
if (d>0) {
const x1= -b+Math.sqrt(d)/2/a;
const x2= -b-Math.sqrt(d)/2/a;
    return 'Корней два:'+'<br>'+
    'первый корень х1='+x1 +'<br>'+
    'второй корень х2='+x2;
} else if (d===0) {
const x= -b/2/a
    return 'Корень один:'+'<br>'+'х1=х2='+ x
} else 
    return 'Корней нет'
} 
