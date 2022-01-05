const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
function showResults(number)
{

    document.getElementById('resultado')
    const container = document.getElementById('resultado')
    const print = document.createElement('div')
    print.innerText = number
    container.appendChild(print)

}

function kata1() {
    // implemente o código do kata 1 aqui
    let myArray = []
    for(let contador = 1; contador <= 25; contador ++)
    {
       myArray.push(contador)
    }
    showResults(myArray)
    
}

kata1()


function kata2() {
    // implemente o código do kata 2 aqui
    let myArray = []
    for(let contador = 25; contador >=1; contador --)
    {
        myArray.push(contador)
    }
    showResults(myArray)
    

}

kata2()

function kata3() {
    // implemente o código do kata 3 aqui
    let myArray = []
    let num = 0
    for(let contador = 1; contador <= 25; contador ++)
    {
        num = contador * -1
        myArray.push(num)
    }
    showResults(myArray)
    
}

kata3()
function kata4() {
    // implemente o código do kata 4 aqui
    let myArray = []
    let num = 0
    for(let contador = 25; contador >=1; contador --)
    {
        num = contador*-1
        myArray.push(num)
    }
    showResults(myArray)
    
}

kata4()

function kata5() {
    // implemente o código do kata 5 aqui
    let myArray = []
    let num = 0
    for(let contador = 25; contador >=1; contador --)
    {
        myArray.push(contador)
        
    }
    for(contador = 1; contador <= 25; contador ++)
    {
        num = contador*-1
        myArray.push(num)
    }
    showResults(myArray)
    
}

kata5()

function kata6() {
    // implemente o código do kata 6 aqui
    let myArray = []
    for(let contador = 3; contador <=100; contador ++){
    if(contador % 3 === 0){
        myArray.push(contador)
    }
}  
    showResults(myArray)
    
}

kata6()

function kata7() {
    // implemente o código do kata 7 aqui
    let myArray = []
    for(let contador = 7; contador <=100; contador ++)
    {
        if(contador % 7 === 0)
        {
            myArray.push(contador)
        }
    }
    showResults(myArray)
    
}

kata7()

function kata8() {
    // implemente o código do kata 8 aqui
    let myArray = []
    for(let contador = 100; contador >=1; contador --)
    {
        if(contador % 3 === 0 || contador % 7 === 0)
        {
            myArray.push(contador)
        }
    }
    showResults(myArray)
    
}

kata8()

function kata9() {
    // implemente o código do kata 9 aqui
    let myArray = []
    for(let contador = 5; contador <= 100; contador ++)
    {
        if(contador % 5 === 0 && contador %2 === 1)
        {
            myArray.push(contador)
        }
    }
    showResults(myArray)
    
}

kata9()

function kata10() {
    // implemente o código do kata 10 aqui
    let myArray = []

    myArray = sampleArray
    showResults(myArray)
    
}

kata10()

function kata11() {
    // implemente o código do kata 11 aqui
    let myArray = []
    for(let contador = 0; contador < sampleArray.length; contador ++) 
    {
        if(sampleArray[contador] %2 === 0)
        {
            myArray.push(sampleArray[contador])
        }
    }
    showResults(myArray)
    
}

kata11()


function kata12() {
    // implemente o código do kata 12 aqui
    let myArray = []
    for(let contador = 0; contador < sampleArray.length; contador ++) 
    {
        if(sampleArray[contador] %2 === 1)
        {
            myArray.push(sampleArray[contador])
        }
    }
    showResults(myArray)
    return myArray
}

kata12()

function kata13() {
    // implemente o código do kata 13 aqui
    let myArray = []
    for(let contador = 0; contador < sampleArray.length; contador ++) 
    {
        if(sampleArray[contador] %8 === 0)
        {
            myArray.push(sampleArray[contador])
        }
    }
    showResults(myArray)
    
}

kata13()

function kata14() {
    // implemente o código do kata 14 aqui
    let myArray = []
    for(let contador = 0; contador < sampleArray.length; contador ++)
    {
    myArray.push(sampleArray[contador]* sampleArray[contador])
    }
    showResults(myArray)
    
}

kata14();

function kata15() {
    // implemente o código do kata 15 aqui
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let myArray = []
    let result = 0
        for(let contador = 0; contador < arr.length; contador++)
        {
            result += arr[contador]
            myArray.push(result)
        }    
        showResults(result)       
 }
 
 kata15()


function kata16() {
    // implemente o código do kata 16 aqui
    let myArray = []
    let result = 0
    for(let contador = 0; contador <sampleArray.length; contador ++)
    {
        result +=sampleArray[contador]
        myArray.push(result)
    }
    showResults(result)
}

kata16()

function kata17() {
    let result = sampleArray[0]
    // implemente o código do kata 17 aqui
    for (let contador = 0; contador < sampleArray.length; contador++) 
    {
        if(result > sampleArray[contador])
        {
            result = sampleArray[contador]
        }
    }
    showResults(result)

    }

    kata17()

function kata18() {
    // implemente o código do kata 18 aqui
    let result = sampleArray[0]
    // implemente o código do kata 17 aqui
    for (let contador = 0; contador < sampleArray.length; contador++) 
    {
        if(result < sampleArray[contador])
        {
            result = sampleArray[contador]
        }
    }
    showResults(result)

    }
    
kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
