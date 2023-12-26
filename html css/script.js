/*let js='amazing';
if(js==='amazing') alert('javascript is fun');
40 + 8 +23 -10;
      console.log(40 +8 +23 -10);
      let firstname = "jonas"
      console.log(firstname);
      console.log(firstname);
      console.log(firstname);
      console.log(firstname);
      let country='India'
      let continent = 'south asia'
      let population = '1000000000'

      console.log("country"=country);*/

      
     
      //let javascriptIsFun = true;
     // console.log(javascriptIsFun);
     // console.log(typeof true);
      //console.log(typeof 23);
      /*console.log(typeof 'jonas');
      javascriptIsFun = 'YES!';
      console.log(typeof javascriptIsFun );
      let year;
      console.log(year);
      console.log(typeof year);
      year= 1991;*/

      /*let age = 30;
      age= 31;
      const birthYear = 1991;
      

      const ageJonas = 1997-1991;
      const ageAry = 2020-1997;
      console.log(ageAry,ageJonas);
      console.log(ageJonas*2,ageJonas/8,2**3);
      //2**3 2 ki power 3
      let x= 10+5;
      x+=10;//x=x+10
      x*=4;//x=x *4
      x++;
      x--;
      console.log(x);*/
      /*const firstName ='Aryan';
      const job = 'software engineer';
      const birthYear = 2001;
      const year = 2037;
      const aryan= "I'm "+ firstName +',a'+ (year-birthYear) +'years old '+ job +'!';
      console.log(aryan);
      console.log(job)
      //es6 use template literals
      const aryanNew   = `I'm ${firstName}, a ${year-birthYear} year old ${job}! `;

      console.log(aryanNew);
console.log(`just a regular string...`)
console.log(`string
aryan
gupta`);      */

// program of if else 
/*const age =15;

if (age>=18){
      console.log('sarah can start driving license😊')
}else {
      const yearsLeft = 18-age;
      console.log(`sarah is very young,wait ${yearsLeft} years  :`);

}

*/
//type conversion
/*
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear )+ 18);
console.log(Number('jonas'));
//convert numver to string
console.log(String(23));
//type coercion
console.log('I am '+ 23 + ' years old');
//+ convert numver into string
console.log('23'+'10'+3);
//- convert string into numver
console.log('23'-'10'-3);


let  n = '1'+1;
n= n-1;
console.log(n);
*/
// 5 falsy values : 0,'',undefined,null,Nan
/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));*/
/*const age ='18';
if(age=== 18)console.log('you just become an adult(strict)');

const favourite =Number(prompt ("what's your favourite number?"));
      
console.log(favourite);
console.log(typeof favourite);
/*if (favourite == 23){
      console.log(`cool its amazing`);
}
// we use == loose equality operator//
// this do type coercion as prompt is string it convert it into number//
*//*if (favourite === 23){
      console.log(`cool its amazing`);
}else if (favourite=== 7){
      console.log(`7 is also cool`);
}else{
      console.log(`number is nothing`);
}
*/
const hasDriversLicense = true;//A
const hasGoodVision = true;//B
console.log(hasDriversLicense && !hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);


// if(hasDriversLicense && hasGoodVision){
//       console.log('sarah is able to drive')
// }
// else{
//       console.log('someone else');
// }
const istired = true;
console.log(hasDriversLicense || hasGoodVision || istired);
if(hasDriversLicense && hasGoodVision && !istired){
             console.log('sarah is able to drive')
       }
       else{
             console.log('someone else');
       }


