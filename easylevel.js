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
    a = ['A','V','O','C','A','D','O','\0'];
    y = a.length-1;
    console.log("Here1");
    hint.innerHTML = "HINT: FRUIT";
    initBlank(y);
    break;

    case '2':
    a = ['K','A','T','H','A','K','A','L','I','\0'];
    y = a.length-1;
    hint.innerHTML = "HINT: A TRADITIONAL INDIAN DANCE FORM";
    initBlank(y);
    break;
    
    case '3':
      a = ['A','L','Z','H','E','I','M','E','R','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: A DISEASE THAT EVENTUALLY DESTROYS MEMORY";
      initBlank(y);
    break;
    
    case '4':
      a = ['P','I','N','O','C','C','H','I','O','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: HIS NOSE GROWS EVERYTIME HE LIES";
      initBlank(y);
      break;
    
    case '5':
      a = ['I','N','T','E','R','S','T','E','L','L','A','R','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FAMOUS SCIENCE FICTION HOLLYWOOD MOVIE";
      initBlank(y);
      break;
    
    case '6':
      a = ['M','A','W','S','Y','N','R','A','M','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: THE WETTEST PLACE IN INDIA\n";
      initBlank(y);
      break;
    
    case '7':
      a = ['H','E','B','R','E','W','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: A BIBLICAL LANGUAGE \n";
      initBlank(y);
    break;
    
    case '8':
      a = ['P','L','A','T','Y','P','U','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: A DUCK-BILLED, BEAVER-TAILED, OTTER-FOOTED, AQUATIC CREATURE NATIVE TO AUSTRALIA \n";
      initBlank(y);
    break;
    
    case '9':
      a = ['G','E','M','I','N','I','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: ZODIAC SIGN\n";
      initBlank(y);
    break;
    
    case '10':
      a = ['D','A','N','D','E','L','I','O','N','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: AN ENGLISH SONG NAMED AFTER \n";
      initBlank(y);
    break;
    
    case '11':
      a = ['N','O','N','A','G','O','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: POLYGON\n";
      initBlank(y);
    break;
    
    case '12':
    hint.innerHTMK = "HINT: SPORTS GAME\n";
    a = ['R','U','G','B','Y','\0'];
    y = a.length-1;
    initBlank(y);
    break;
    
    case '13':
      a = ['P','O','T','T','E','R','Y','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FORM OF TRADITIONAL ART";
      initBlank(y);
    break;
    
    case '14':
      a = ['V','O','L','K','S','W','A','G','E','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: CAR MANUFACTURERING COMPANY \n";
      initBlank(y);
      break;
    
    case '15':
      a = ['A','R','Y','A','B','H','A','T','A','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: INDIAN MATHEMATICIAN \n";
      initBlank(y);
    break;
    
    case '16':
      a = ['K','Y','R','G','Y','S','T','A','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: COUNTRY\n";
    initBlank(y);
    break;
    
    case '17':
      a = ['T','A','E','K','W','O','N','D','O','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: MARTIAL ART\n";
    initBlank(y);
    break;
    
    case '18':
      a = ['T','O','B','L','E','R','O','N','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: CHOCOLATE \n";
    initBlank(y);
    break;
    
    case '19':
      a = ['K','U','N','A','F','A','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: SWEET DISH\n";
      initBlank(y);
    break;
    
    case '20':
      a = ['D','U','S','S','H','E','R','A','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: INDIAN FESTIVAL\n";
      initBlank(y);
    break;
    
    case '21':
      a = ['M','A','N','I','F','E','S','T','\0'] ;
      y = a.length-1;
      hint.innerHTML = "HINT: NETFLIX WEB SERIES\n";
      initBlank(y);
    break;
    
    case '22':
      a = ['B','A','G','U','E','T','T','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: A TYPE OF BREAD\n";
    initBlank(y);
    break;
    
    case '23':
      a = ['D','O','R','A','E','M','O','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: CARTOON\n";
    initBlank(y);
    break;
    
    case '24':
      a = ['I','K','I','G','A','I','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: INTERNATIONAL BEST SELLER BOOK\n";
    initBlank(y);
    break;
    
    case '25':
      a = ['T','U','M','B','L','R','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: SOCIAL MEDIA PLATFORM\n";
    initBlank(y);
    break;
    
    case '26':
      a = ['A','L','L','I','G','A','T','O','R','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: REPTILE\n";
    initBlank(y);
    break;
    
    case '27':
      a = ['P','A','J','A','M','A','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: CLOTHING\n";
    initBlank(y);
    break;
    
    case '28':
      a = ['L','A','D','Y','B','U','G','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: INSECT\n";
    initBlank(y);
    break;
    
    case '29':
      a = ['D','R','U','M','S','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: MUSICAL INSTRUMENT\n";
    initBlank(y);
    break;
    
    case '30':
      a = ['S','H','A','R','K','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FISH\n";
      initBlank(y);
    break;

    case '31':
      a = ['P','I','A','N','O','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: MUSICAL INSTRUMENT\n";
    initBlank(y);
    break;

    case '32':
      a = ['C','R','A','Y','O','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: STATIONARY\n";
      initBlank(y);
    break;

    case '33':
      a = ['G','R','A','P','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FRUIT\n";
    initBlank(y);
    break;

    case '34':
      a = ['E','L','B','O','W','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: BODY PART\n";
    initBlank(y);
    break;

    case '35':
      a = ['Q','U','A','R','A','N','T','I','N','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: RELATED TO PANDEMIC\n";
      initBlank(y);
    break;

    case '36':
      a = ['B','L','A','C','K','S','M','I','T','H','Y','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: PROFESSION\n";
    initBlank(y);
    break;

    case '37':
      a = ['T','U','R','Q','U','O','I','S','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: COLOUR\n";
    initBlank(y);
    break;

    case '38':
      a = ['P','S','Y','C','H','I','A','T','R','I','S','T','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: DOCTOR\n";
    initBlank(y);
    break;

    case '39':
      a = ['Z','E','R','O','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: NUMBER\n";
    initBlank(y);
    break;
    

    case '40':
      a = ['N','E','U','T','R','O','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: PARTICLE IN SCIENCE\n";
    initBlank(y);
    break;
  
    case '41':
      a = ['T','U','I','T','I','O','N','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: PROFESSION\n";
    initBlank(y);
    break;

    case '42':
      a = ['B','L','A','N','K','E','T','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: CLOTHING\n";
    initBlank(y);
    break;

    case '43':
      a = ['P','O','P','S','I','C','L','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: SWEET SNACK\n";
    initBlank(y);
    break;

    case '44':
      a = ['D','E','S','K','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FURNITURE\n";
    initBlank(y);
    break;

    case '45':
      a = ['W','H','A','L','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: MAMMAL\n";
    initBlank(y);
    break;

    case '46':
      a = ['S','A','N','D','W','I','C','H','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: FOOD ITEM\n";
    initBlank(y);
    break;

    case '47':
      a = ['C','H','A','L','K','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: STATIONARY\n";
    initBlank(y);
    break;

    case '48':
      a = ['C','O','M','P','U','T','E','R','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: DEVICE\n";
    initBlank(y);
    break;

    case '49':
      a = ['B','R','O','O','M','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: USED FOR CLEANING PURPOSE\n";
    initBlank(y);
    break;

    case '50':
      a = ['C','A','N','D','L','E','\0'];
      y = a.length-1;
      hint.innerHTML = "HINT: SOMETHING WHICH GIVES LIGHT\n";
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




