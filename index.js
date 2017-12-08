const a = parseFloat(prompt('enter "a" value'));
const b = parseFloat(prompt('enter "b" value'));
const c = parseFloat(prompt('enter "c" value'));

const d = b*b-4*a*c;

if (d>0) {
const x1= -b+Math.sqrt(d)/2/a;
const x2= -b-Math.sqrt(d)/2/a;
    document.write('Корней два:');
    document.write('<br>');
    document.write('первый корень х1='+x1);
    document.write('<br>');
    document.write('второй корень х2='+x2);
} else if (d===0) {
const x= -b/2/a
    document.write('Корень один х1=х2='+x)
} else 
    document.write('Корней нет')

