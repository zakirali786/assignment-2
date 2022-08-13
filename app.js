//question 1
function question1(num){
    var nu = num.toString().split("").reverse().join("");
    console.log(parseInt(nu))
}
question1(32234); 
//question no 2        
function question2(){
  var string = prompt("enter a string")
  var convertarray=  string.split('');
  var stringarryareve = convertarray.reverse();
  var revstring = stringarryareve.join('');
  if(string ===  revstring){
console.log(string + "it is pliandrome");
  }
  else{
    console.log(string + " : it is not plaindrome")
  }
}
question2();
//question no 3
function question3(str){
  var list = [];
  for(var i = 0;i < str.length;i++){
    for(var j  = i+1;j < str.length+1;j++){
      list.push(str.slice(i,j))
    }
  }
  return list;

}
console.log(question3("dog"));
//question no 4
function question4(st){
  var spl = st.split('');
  var sort = spl.sort();
  console.log(sort.join(''));
}
question4("webmaster");
//question no 5
function question5(check){
  var show = check.split(" ");
   show.sort(function (a,b){
       return b.length - a.length; 
   })
   return show[0];
}
console.log(question5(check = "web Development tutorial"));
//question no 6
var string =  "the Quick Brown Fox";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter(string)); 
//question 7
function question7(str1){
  var vowel = 'aeiouAEIOU';
  var vowelcount= 0;
  for(var x = 0; x < str1.length ; x++){
    if (vowel.indexOf(str1[x]) !== -1){
      vowelcount += 1;
    }
  }
  return vowelcount;
}
console.log(question7("The quick brown fox"))
//question8
function question8(n){

  if (n===1){
    return false;
  }
  else if(n === 2){
    return true;
  }else
  {
    for(var x = 2; x < n; x++){
      if(n % x === 0){
        return false;
      }
    }
    return true;  
  }
}
console.log(question8(43));
//question9
function question9(typecheck){
  return  typeof(typecheck);
}
console.log(question9(23));
//question10 
function question10(num){
  num.sort(function(x,y){
           return x-y;
 });
  var uniq = [num[0]];
  var result = [];
  
  for(var j=1; j < num.length; j++){
    if(num[j-1] !== num[j]){
      uniq.push(num[j]);
    }
  }
    result.push(uniq[1],uniq[uniq.length-2]);
  return result.join(',');
  }

console.log(question10([1,2,3,4,5]));


