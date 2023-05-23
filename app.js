
//-----------FUNTIONS---------------
//-------------question number 01----------


// function liveDate (){
//     var date = new Date()
//     var dateString = date.toLocaleString();
//     alert(`the current date & time in pak is ${dateString}`)
//     console.log(`the current date & time in pak is ${dateString}`)
//     document.write (`the current date & time in pak is ${dateString}`)
// }
// liveDate();

//------------question number 02----


// function greeting(){
//     var first = prompt("write your first name")
//     var last = prompt("write your last name")
//     alert(`Assalam o alikum ${first}${last}!`)
// }
// greeting()

// var num3 = prompt("write a OPERATER ")
//------------question number 03----------


// function math(num1,num2){
// return (num1 + num2)
// }
// var num1 = +prompt("write a first number")
// var num2 = +prompt("write a second number")

// document.write(math(num1,num2))

//----------QUESTION NUMBER 04-------

// var num1 = +prompt("write a first number")
// var num3 = prompt("write a OPERATER ")
// var num2 = +prompt("write a second number")
// function desire(num1,num2,num3){
//     return (`${num1} ${num3} ${num2}`)
// }
// alert(desire(num1,num2))
//-------------question  number 05-------


// var typeOfSquare = +prompt("write a number o you want to take double")

// function square (typeOfSquare){

//     return typeOfSquare **2
// }
// document .write(square(typeOfSquare))


// queation Number  06 

// function factorial(num){
//     if(num===0){
//         return 1;
//     }
//     else{
//         return num*factorial(num-1);
//     }
// }

// let number = prompt("wriet the number.")
// console.log(factorial(number))

    // number 07

    // var start = prompt("start value")
    // var end = prompt("end value")

    // function count(num1,num2){
    //     for(let i = num1;i<=num2;i++)
    //     {
    //         console.log(i)

    //     }
    

    // }
    // count(start,end)


    // number  08

     /*let inputBase =  +prompt("enter the base of the triangle,")
    let inputPerpendicular =  +prompt("enter the perpendicular of the triangle,")

    let func = (a,b) => {
        let sqr = a**2 + b**2
        
        let func01 = (sqr ) => {
            let hypotenus = Math.sqrt(sqr);
            console.log(hypotenus)
            return hypotenus
        }
        
        return func01(sqr);
    
    }
    func(inputBase,inputPerpendicular)



    function calculateHypotnues (base,perpendicular){
        function calculatSqure (a){
            return a*a;
        }
        let baseSqr = calculatSqure(inputBase)
        let perpendiculeSqr = calculatSqure(inputPerpendicular);
        let hypotenes = Math.sqrt(baseSqr + perpendiculeSqr)
        console.log(hypotenes)
        return hypotenes
        
    }
    console.log(calculateHypotnues(inputBase,inputPerpendicular))



    function calculate (a,b){
        return Math.sqrt(a**2 + b**2)
    }

    // calculate(inputBase,inputPerpendicular)
     console.log(calculate(inputBase,inputPerpendicular))
     */


    //  Number 9

    // let inputwith =  +prompt("enter the with of the rectangle,")
    // let inputHieght =  +prompt("enter the hieght of the rectangle,")

    // let calculateRectangel  = (a, b ) => {

    //     let areaOfRectangle = a * b;

    //     return `the area of rectangle is ${areaOfRectangle} inches`
    // }
    // console.log(calculateRectangel(inputwith,inputHieght))


    //Number 10

    /*let checkWeather = prompt("enter any palindromic pharase","like madam,racecar.etc")
        //check the input is palindrome

    function isPalindrome (str){

        // convert the string to lowercase and replace all non-alphanumneric characters;

        str = str.toLowerCase().replace(/[^a-z0-9]/g,'');

        //reverse the string

        var reversed = str.split("").reverse().join("");

        //compere the orignal and reverse string

        return str === reversed;
    }

    console.log(isPalindrome(checkWeather));*/
    
    //Number 11
/*
    let randomPara = prompt("enter random 20 words para","lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis, saepe perspiciatis harum natus perferendis dolores laudantium, sequi obcaecati qui excepturi")

    function toFirstLetter (first){
        let toFirstLetterPara = first.split(" ")
        
        for(var l=0; l < toFirstLetterPara.length -1  ;l++)
        {
            
             toFirstLetterPara[l] =  toFirstLetterPara[l].charAt(0).toUpperCase() + toFirstLetterPara[l].slice(1)
            
        }
        return document.write(toFirstLetterPara.join(" "))
    }
    toFirstLetter(randomPara)*/
    


    //NUmber 12

    /*
    let para = prompt("enter random 20 words para","lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis facilis, saepe perspiciatis harum natus perferendis dolores laudantium, sequi obcaecati qui excepturi")

  
        function FindlongestWord (long){
            //split the input paraghragh

            let words = long.split(" ")
            //initialized the empty variable to store largest word

            let storeLargestWord = "";
            //loop through each word in the array

            for(let w=0;w<words.length;w++)
            {
                //if current word.lenght > stored wrd.length so update it 
                if(words[w].length > storeLargestWord.length)
                {
                    storeLargestWord = words[w]
                }
            }
            //return the longest word
            return storeLargestWord;
            
        }
      
        console.log(  FindlongestWord(str))*/


        //Number 13


        // let userPara = prompt("Enter your random paragraph")

        // let userLetter = prompt("Enter the letter what you want to find its exist,, ")


        // function findCharacter (para,letter){
        //     //initialized a variable to store the count
        //     var count = 0;
            
        //     //loop through each charater in the string
        //     for(var c = 0;c<para.length;c++){

        //         // console.log(para)

        //         if(para.charAt(c)=== letter)
        //         {
        //             count++;
        //         }
        //     }
        //     // return the count
        //     return  count;
        // }
        // let countdown =  findCharacter(userPara  ,userLetter)

        // console.log(countdown);

        // Number 14



        // let radiusOfCircle = prompt("enter the radius of the circle")
        // function calculteCircumference (radius){

        //     // let pi = Math.PI(radius)

        //     let circum = 2*(3.14*radius).toFixed(1);

        //     console.log(`the circumference of the circle is ${circum}`)

            
        // }
        // calculteCircumference(radiusOfCircle)

                    // ***area of the circle
        // let radiusOfCircle =  prompt("enter the radius of the circle")

        // function areaofCircle (radius){

        //     let area = 3.14 *(radius**2)

        //     console.log(area)
        // }
           

        // areaofCircle(radiusOfCircle)