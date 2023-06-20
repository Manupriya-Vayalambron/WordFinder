/*This is the c programming code of the gaming section*/
#include<stdio.h>
#include<string.h>
#include<stdlib.h>

void word(char[],int);

int main()
{
  int n,l;
  printf("Enter a number from 1 to 100 to start the game: ");
  scanf("%d",&n);
  switch(n)
  {
   
    case 1:
    printf("HINT: PEAR- SHAPED FRUIT\n");
    char a[]={'A','V','O','C','A','D','O','\0'};
    l=strlen(a);
    word(a,l);
    break;
     
    case 2:
    printf("HINT: A TRADITIONAL INDIAN DANCE FORM\n");
    char a2[]={'K','A','T','H','A','K','A','L','I','\0'};
    l=strlen(a2);
    word(a2,l);
    break;
    
    case 3:
    printf("HINT: A DISEASE THAT EVENTUALLY DESTROYS MEMORY \n");
    char a3[]={'A','L','Z','H','E','I','M','E','R','S','\0'};
    l=strlen(a3);
    word(a3,l);
    break;
    
    case 4:
    printf("HINT: HIS NOSE GROWS EVERYTIME HE LIES\n");
    char a4[]={'P','I','N','O','C','C','H','I','O','\0'};
    l=strlen(a4);
    word(a4,l);
    break;
    
    case 5:
    printf("HINT: FAMOUS SCIENCE FICTION HOLLYWOOD MOVIE \n");
    char a5[]={'I','N','T','E','R','S','T','E','L','L','A','R','\0'};
    l=strlen(a5);
    word(a5,l);
    break;
    
    case 6:
    printf("HINT: THE WETTEST PLACE IN INDIA\n");
    char a6[]={'M','A','W','S','Y','N','R','A','M','\0'};
    l=strlen(a6);
    word(a6,l);
    break;
    
    case 7:
    printf("HINT: A BIBLICAL LANGUAGE \n");
    char a7[]={'H','E','B','R','E','W','\0'};
    l=strlen(a7);
    word(a7,l);
    break;
    
    case 8:
    printf("HINT: A DUCK-BILLED, BEAVER-TAILED, OTTER-FOOTED, AQUATIC CREATURE NATIVE TO AUSTRALIA \n");
    char a8[]={'P','L','A','T','Y','P','U','S','\0'};
    l=strlen(a8);
    word(a8,l);
    break;
    
    case 9:
    printf("HINT: ZODIAC SIGN\n");
    char a9[]={'G','E','M','I','N','I','\0'};
    l=strlen(a9);
    word(a9,l);
    break;
    
    case 10:
    printf("HINT: AN ENGLISH SONG NAMED AFTER \n");
    char a10[]={'D','A','N','D','E','L','I','O','N','S','\0'};
    l=strlen(a10);
    word(a10,l);
    break;
    
    case 11:
    printf("HINT: POLYGON\n");
    char a11[]={'N','O','N','A','G','O','N','\0'};
    l=strlen(a11);
    word(a11,l);
    break;
    
    case 12:
    printf("HINT: SPORTS GAME\n");
    char a12[]={'R','U','G','B','Y','\0'};
    l=strlen(a12);
    word(a12,l);
    break;
    
    case 13:
    printf("HINT: FORM OF TRADITIONAL \n");
    char a13[]={'P','O','T','T','E','R','Y','\0'};
    l=strlen(a13);
    word(a13,l);
    break;
    
    case 14:
    printf("HINT: CAR MANUFACTURERING COMPANY \n");
    char a14[]={'V','O','L','K','S','W','A','G','E','N','\0'};
    l=strlen(a14);
    word(a14,l);
    break;
    
    case 15:
    printf("HINT: INDIAN MATHEMATICIAN \n");
    char a15[]={'A','R','Y','A','B','H','A','T','A','\0'};
    l=strlen(a15);
    word(a15,l);
    break;
    
    case 16:
    printf("HINT: COUNTRY\n");
    char a16[]={'K','Y','R','G','Y','S','T','A','N','\0'};
    l=strlen(a16);
    word(a16,l);
    break;
    
    case 17:
    printf("HINT: MARTIAL ART\n");
    char a17[]={'T','A','E','K','W','O','N','D','O','\0'};
    l=strlen(a17);
    word(a17,l);
    break;
    
    case 18:
    printf("HINT: CHOCOLATE \n");
    char a18[]={'T','O','B','L','E','R','O','N','E','\0'};
    l=strlen(a18);
    word(a18,l);
    break;
    
    case 19:
    printf("HINT: SWEET DISH\n");
    char a19[]={'K','U','N','A','F','A','\0'};
    l=strlen(a19);
    word(a19,l);
    break;
    
    case 20:
    printf("HINT: INDIAN FESTIVAL\n");
    char a20[]={'D','U','S','S','H','E','R','A','\0'};
    l=strlen(a20);
    word(a20,l);
    break;
    
    case 21:
    printf("HINT: NETFLIX WEB SERIES\n");
    char a21[]={'M','A','N','I','F','E','S','T','\0'};
    l=strlen(a21);
    word(a21,l);
    break;
    
    case 22:
    printf("HINT: A TYPE OF BREAD\n");
    char a22[]={'B','A','G','U','E','T','T','E','\0'};
    l=strlen(a22);
    word(a22,l);
    break;
    
    case 23:
    printf("HINT: CARTOON\n");
    char a23[]={'D','O','R','A','E','M','O','N','\0'};
    l=strlen(a23);
    word(a23,l);
    break;
    
    case 24:
    printf("HINT: INTERNATIONAL BEST SELLER BOOK\n");
    char a24[]={'I','K','I','G','A','I','\0'};
    l=strlen(a24);
    word(a24,l);
    break;
    
    case 25:
    printf("HINT: SOCIAL MEDIA PLATFORM\n");
    char a25[]={'T','U','M','B','L','R','\0'};
    l=strlen(a25);
    word(a25,l);
    break;
    
    case 26:
    printf("HINT: REPTILE\n");
    char a26[]={'A','L','L','I','G','A','T','O','R','\0'};
    l=strlen(a26);
    word(a26,l);
    break;
    
    case 27:
    printf("HINT: CLOTHING\n");
    char a27[]={'P','A','J','A','M','A','S','\0'};
    l=strlen(a27);
    word(a27,l);
    break;
    
    case 28:
    printf("HINT: INSECT\n");
    char a28[]={'L','A','D','Y','B','U','G','\0'};
    l=strlen(a28);
    word(a28,l);
    break;
    
    case 29:
    printf("HINT: MUSICAL INSTRUMENT\n");
    char a29[]={'D','R','U','M','S','\0'};
    l=strlen(a29);
    word(a29,l);
    break;
    
    case 30:
    printf("HINT: FISH\n");
    char a30[]={'S','H','A','R','K','\0'};
    l=strlen(a30);
    word(a30,l);
    break;

    case 31:
    printf("HINT: MUSICAL INSTRUMENT\n");
    char a31[]={'P','I','A','N','O','\0'};
    l=strlen(a31);
    word(a31,l);
    break;

    case 32:
    printf("HINT: STATIONARY\n");
    char a32[]={'C','R','A','Y','O','N','\0'};
    l=strlen(a32);
    word(a32,l);
    break;

    case 33:
    printf("HINT: FRUIT\n");
    char a33[]={'G','R','A','P','E','\0'};
    l=strlen(a33);
    word(a33,l);
    break;

    case 34:
    printf("HINT: JOINT OF BODY\n");
    char a34[]={'E','L','B','O','W','\0'};
    l=strlen(a34);
    word(a34,l);
    break;

    case 35:
    printf("HINT: RELATED TO PANDEMIC\n");
    char a35[]={'Q','U','A','R','A','N','T','I','N','E','\0'};
    l=strlen(a35);
    word(a35,l);
    break;

    case 36:
    printf("HINT: PROFESSION\n");
    char a36[]={'B','L','A','C','K','S','M','I','T','H','Y','\0'};
    l=strlen(a36);
    word(a36,l);
    break;

    case 37:
    printf("HINT: COLOUR\n");
    char a37[]={'T','U','R','Q','U','O','I','S','E','\0'};
    l=strlen(a37);
    word(a37,l);
    break;

    case 38:
    printf("HINT: DOCTOR\n");
    char a38[]={'P','S','Y','C','H','I','A','T','R','I','S','T','\0'};
    l=strlen(a38);
    word(a38,l);
    break;

    case 39:
    printf("HINT: NUMBER\n");
    char a39[]={'Z','E','R','O','\0'};
    l=strlen(a39);
    word(a39,l);
    break;
    
    case 40:
    printf("HINT: PARTICLE IN SCIENCE\n");
    char a40[]={'N','E','U','T','R','O','N','\0'};
    l=strlen(a40);
    word(a40,l);
    break;

    case 41:
    printf("HINT: PROFESSION\n");
    char a41[]={'T','U','I','T','I','O','N','\0'};
    l=strlen(a41);
    word(a41,l);
    break;

    case 42:
    printf("HINT: CLOTHING\n");
    char a42[]={'B','L','A','N','K','E','T','\0'};
    l=strlen(a42);
    word(a42,l);
    break;

    case 43:
    printf("HINT: SWEET SNACK\n");
    char a43[]={'P','O','P','S','I','C','L','E','\0'};
    l=strlen(a43);
    word(a43,l);
    break;

    case 44:
    printf("HINT: FURNITURE\n");
    char a44[]={'D','E','S','K','\0'};
    l=strlen(a44);
    word(a44,l);
    break;

    case 45:
    printf("HINT: FISH\n");
    char a45[]={'S','H','A','R','K','\0'};
    l=strlen(a45);
    word(a45,l);
    break;

    case 46:
    printf("HINT: FOOD ITEM\n");
    char a46[]={'S','A','N','D','W','I','C','H','\0'};
    l=strlen(a46);
    word(a46,l);
    break;

    case 47:
    printf("HINT: STATIONARY\n");
    char a47[]={'C','H','A','L','K','\0'};
    l=strlen(a47);
    word(a47,l);
    break;

    case 48:
    printf("HINT: DEVICE\n");
    char a48[]={'C','O','M','P','U','T','E','R','\0'};
    l=strlen(a48);
    word(a48,l);
    break;

    case 49:
    printf("HINT: USED FOR CLEANING PURPOSE\n");
    char a49[]={'B','R','O','O','M','\0'};
    l=strlen(a49);
    word(a49,l);
    break;
    
    case 50:
    printf("HINT: SOMETHING WHICH GIVES LIGHT\n");
    char a50[]={'C','A','N','D','L','E','\0'};
    l=strlen(a50);
    word(a50,l);
    break;

    default:
    printf("Invalid choice");
  }
  return 0;
}


void word(char x[],int y)
{
  int i,p,count=7,m;
  char b[2]; //variable to store the guessed alphabet
  char str[y+1]; //variable to store all the alphabets entered by user
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
 
   
  for(i=0;i<y+1;i++) //to show the length of the word
  {
    printf("%c \t",str[i]);
  }

  printf("\nGuess an alphabet: ");
  while(count>=0)
  {
    scanf("%s",b);
    int flag=0;
    for(m=0;m<=y;m++)
    {
      int ct=0;
      if(x[m]==b[0])
      {
        printf("\nGood job! Keep Going\n\n");

        for(p=1;p<=y+1;p++)
        {
          if(p==(m+1))
          {
           str[p-1]=b[0];//replace the blank at specified position with the alphabet guessed
          }
        }

        for(i=0;i<y+1;i++)
        {
          printf("%c\t",str[i]);
        }

        for(i=0;i<=y+1;i++)
        {
          if(x[i]==str[i])
          {
            ct++;
            if(ct==y+1)
            {
              printf("\n\nCONGRATULATIONS! You successfully guessed the word %s and won the game",x);
              exit(1);
            }
          }
        }
        printf("\nGuess the next alphabet: ");
      }
      else
      {
        flag++;
        if(flag==y+1)
        {
          if(count>1)
          {
            printf("\nOnly %d guesses left, guess the next alphabet: ",count-1);
            count--;
          }
          else
          {
            printf("You are out");
          }  
        }
      }
    }
  }
}
