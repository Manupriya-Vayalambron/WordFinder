let num = document.querySelector('.num');
let user_val = document.querySelector('.user_val');
let submit = document.querySelector('.submit');

let letter = document.querySelector('.letter');
let letter_lab = document.querySelector('.letter_lab');
let blank = document.querySelector('.blank');
let hint = document.querySelector('.hint');
let usedltr = document.querySelector('.usedltr');
let remarks = document.querySelector('.remarks');
let rem_tries = document.querySelector('.rem_tries');
let enter = document.querySelector('.enter');
let str;
let a;
let store = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var y;


function initBlank(y){
  count = 7;
  rem_tries.innerHTML = count;
  blank.innerHTML = "";
  remarks.innerHTML = "";
  str = new Array(y+1); //variable to store all the alphabets entered by user
  for(i=0;i<y+1;i++) //initially the variable str has all blank spaces
  {
    if(i==y)
    {
      str[i]='\0';
    }      
    else
   {
      str[i]='_';
   }
  }
  
  for(i=0;i<y;i++) //to show the length of the word
  {
    blank.innerHTML += str[i] + " ";
    //console.log(str[i]);
  }
}
submit.addEventListener("click",function(){
    //user_val.innerHTML = "The value entered by the user is: "+num.value;
    //count = 7;
    switch(num.value){
   
      case '1':
        a = ['P','I','N','O','C','C','H','I','O','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: HIS NOSE GROWS EVERYTIME HE LIES";
        initBlank(y);
        break;
  
      case '2':
        a = ['M','A','W','S','Y','N','R','A','M','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: THE WETTEST PLACE IN INDIA\n";
        initBlank(y);
        break;
  
      case '3':
        a = ['D','A','N','D','E','L','I','O','N','S','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: AN ENGLISH SONG NAMED AFTER \n";
        initBlank(y);
      break;
  
      case '4':
        a = ['N','O','N','A','G','O','N','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: POLYGON\n";
        initBlank(y);
      break;
  
      case '5':
        a = ['K','Y','R','G','Y','S','T','A','N','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: COUNTRY\n";
      initBlank(y);
      break;
  
      case '6':
        a = ['M','A','N','I','F','E','S','T','\0'] ;
        y = a.length-1;
        hint.innerHTML = "HINT: NETFLIX WEB SERIES\n";
        initBlank(y);
      break;
  
  
      case '7':
        a = ['T','U','M','B','L','R','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: SOCIAL MEDIA PLATFORM\n";
      initBlank(y);
      break;
  
      case '8':
        a = ['P','A','J','A','M','A','S','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: CLOTHING\n";
      initBlank(y);
      break;
  
      case '9':
        a = ['Q','U','A','R','A','N','T','I','N','E','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: RELATED TO PANDEMIC\n";
        initBlank(y);
      break;
  
      case '10':
        a = ['B','L','A','C','K','S','M','I','T','H','Y','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: PROFESSION\n";
      initBlank(y);
      break;
  
      case '11':
        a = ['T','U','R','Q','U','O','I','S','E','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: COLOUR\n";
      initBlank(y);
      break;
  
      case '12':
        a = ['P','S','Y','C','H','I','A','T','R','I','S','T','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: DOCTOR\n";
      initBlank(y);
      break;
  
      case '13':
        a = ['P','O','P','S','I','C','L','E','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: SWEET SNACK\n";
      initBlank(y);
      break;
  
      case '14':
        a = ['C','H','A','L','K','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: STATIONARY\n";
      initBlank(y);
      break;
  
      case '15':
        a = ['L','I','N','G','U','I','S','T','I','C','S','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: SUBJECT\n";
      initBlank(y);
      break;
  
      case '16':
        a = ['B','E','E','T','L','E','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: INSECT\n";
      initBlank(y);
      break; 
  
  
      case '17':
        a = ['V','I','C','T','O','R','I','A','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: WATERFALLS\n";
      initBlank(y);
      break;
  
      case '18':
        a = ['S','U','R','F','I','N','G','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: SPORTS\n";
      initBlank(y);
      break;
  
      case '19':
        a = ['T','R','U','M','P','E','T','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: MUSICAL INSTRUMENT\n";
      initBlank(y);
      break;
  
      case '20':
        a = ['H','Y','U','N','D','A','I','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: CAR MANUFACTURING COMPANY\n";
      initBlank(y);
      break;
    
      case '21':
        a = ['K','Y','R','G','Y','Z','R','E','P','U','B','L','I','C','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: COUNTRY\n";
      initBlank(y);
      break;
  
      case '22':
        a = ['D','E','M','O','N','S','L','A','Y','E','R','\0'] ;
        y = a.length-1;
        hint.innerHTML = "HINT: NETFLIX ANIME SERIES\n";
        initBlank(y);
      break;
  
  
      case '23':
        a = ['O','D','N','O','K','L','A','S','S','N','I','K','I','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: SOCIAL MEDIA PLATFORM\n";
      initBlank(y);
      break;
  
      case '24':
        a = ['L','O','U','I','S','V','U','I','T','T','O','N','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: CLOTHING BRAND\n"; 
      initBlank(y);
      break;
  
      case '25':
        a = ['B','U','T','C','H','E','R','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: PROFESSION\n";
      initBlank(y);
      break;
  
      case '26':
        a = ['L','A','V','E','N','D','E','R','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: COLOUR\n"; 
      initBlank(y);
      break;
  
      case '27':
        a = ['C','H','I','R','A','N','J','E','E','V','I','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: ACTOR\n";   
      initBlank(y);
      break;
  
      case '28':
        a = ['K','A','L','A','K','A','N','D','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: DESSERT \n";
      initBlank(y);
      break;
  
      case '29':
        a = ['W','O','L','V','E','R','I','N','E','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: MARVEL\n";
      initBlank(y);
      break;

      case '30':
        a = ['B','H','A','R','A','T','B','E','N','Z','\0'];
        y = a.length-1;
        hint.innerHTML = "HINT: VEHICLE MANUFACTURING COMPANY\n";
      initBlank(y);
      break;

    case '31':
      a = ['E','N','V','E','L','O','P','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: STATIONARY\n";
    initBlank(y);
    break;

    case '32':
      a = ['M','E','L','A','T','O','N','I','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: HORMONE\n";
    initBlank(y);
    break;

    case '33':
      a = ['T','H','E','S','E','U','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: GREEK HERO\n";
    initBlank(y);
    break


    case '34':
      a = ['D','A','H','L','I','A','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FLOWER\n";
    initBlank(y);
    break;

    case '35':
      a = ['T','U','N','G','S','T','E','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: ELEMENT\n";
    initBlank(y);
    break;

    case '36':
      a = ['S','U','K','H','D','E','V','\0'];
      y = a.length-1;
      hint.innerHTML = "FREEDOM FIGHTER\n";
    initBlank(y);
    break;

    case '37':
      a = ['B','I','R','C','H','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: TREE\n";
    initBlank(y);
    break;


    case '38':
      a = ['T','I','F','F','A','N','Y','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: LUXURY BRAND\n";
    initBlank(y);
    break;

    case '39':
      a = ['P','I','P','E','L','I','N','E','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: MODE OF TRANSPORT\n";
    initBlank(y);
    break;

    case '40':
      a = ['W','O','R','D','S','W','O','R','T','H','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FAMOUS ENGLISH POET\n";
    initBlank(y);
    break;
  
    case '41':
      a = ['C','H','A','K','R','A','V','A','K','A','S','A','N','A','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: YOGA POSE\n";
    initBlank(y);
    break;

    case '42':
      a = ['W','A','I','S','T','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: BODY PART\n";
    initBlank(y);
    break;

    case '43':
      a = ['C','A','R','P','E','N','T','E','R','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: INSECT\n";
    initBlank(y);
    break; 


    case '44':
      a = ['A','T','H','I','R','A','P','P','I','L','L','Y','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: WATERFALLS\n";
    initBlank(y);
    break;

    case '45':
      a = ['P','A','R','A','C','H','U','T','I','N','G','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: SPORTS\n";
    initBlank(y);
    break;

    case '46':
      a = ['A','N','G','K','L','U','N','G','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: MUSICAL INSTRUMENT\n";
    initBlank(y);
    break;

    case '47':
      a = ['T','A','U','R','U','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: ZODIAC SIGN\n";
      initBlank(y);
    break;

    case '48':
      a = ['A','N','E','M','O','N','E','F','I','S','H','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FISH\n";
      initBlank(y);
    break;

    case '49':
      a = ['A','U','G','U','S','T','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: MONTH\n";
    initBlank(y);
    break;

    case '50':
      a = ['S','U','A','R','E','Z','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FOOTBALLER\n";
    initBlank(y);
    break;
}});

enter.addEventListener("click",function(event){
  console.log("Here");

    let i,p,m;
    var b = new Array(2); //variable to store the guessed alphabet
   
    console.log(typeof(y));
    let ct;

    
    
  console.log("Guess an alphabet: ");
  console.log("Count: "+count);
  console.log("Length of y: "+y);
  if(count>0)
  {
    //b = prompt();
    b = letter.value;
  
    


    console.log(typeof(b[0]));
    let flag=0;
    printRemaining(b,str);
    for(m=0;m<y;m++)
    {
/*{
  for(d=k;d<26;d++)
  {
    store[k]=store[k+1];
    k++;
  }
}*/

      ct = 0;
      if(a[m]==b[0])
      {
        remarks.innerHTML = "Good job! Keep Going";

        for(p=1;p<=y+1;p++)
        {
          if(p==(m+1))
          {
           str[p-1]=b[0];//replace the blank at specified position with the alphabet guessed
          }
        }

        blank.innerHTML = "";

        for(i=0;i<y;i++)
        {
          blank.innerHTML+=str[i]+" ";
        }
      
        for(i=0;i<y;i++)
        {
          console.log("a[i]: "+a[i]+" str[i]: "+str[i]);
          console.log("y: "+y);
          if(a[i]==str[i])
          {
            ct++;
            console.log("ct: "+ct);
            if(ct==y)
            {
              remarks.innerHTML = "CONGRATULATIONS! You guessed the word";
              //console.log("ct is : "+ct);
              return;
              //exit(1);
            }
          }
        }
        //console.log("Guess the next alphabet: ");
      }
      else
      {
        
        console.log("Entered else");
        flag++;
        console.log("flag: "+flag);
        if(flag==y)
        {

          if(count>1)
          {
            count = count-1;
            rem_tries.innerHTML = count;
            remarks.innerHTML = "Wrong guess! Try again!";
          }
          else
          {
            rem_tries.innerHTML = "0";
            location.reload();
           /*window.location.href="file:///C:/Users/Manupriya/OneDrive/Desktop/Abhi_project%20-%20Copy/game.html";
           /* let act_wrd = "";
            for(let k=0;k<y;k++){
              act_wrd+=a[k];
            }
            remarks.innerHTML = "You are out. The actual word was " + act_wrd;*/
          }  
        }
      }
    }
  }
});
function printRemaining(b,str)
{
for(k=0;k<26;k++)
{
  if(b[0]==store[k] || str[k]==b[0])
  {
   store.splice(k,1);
  }
}
usedltr.innerHTML = "Remaining letters: "+store;
}




