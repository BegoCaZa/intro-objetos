const towerData = {
    levelOne: {
      vowels: [], // Vocales extraídas
    },
    levelTwo: {
      consonants: [], // Consonantes extraídas
    },
    levelThree: {
      words: [], // Palabras extraídas en orden normal
    },
    levelFour: {
      wordLengths: [], // Longitud de cada palabra
    },
    levelFive: {
      uppercasedWords: [], // Palabras en mayúsculas
      lowercasedWords: [] // Palabras en minúsculas
    },
    levelSix: {
      secretMessage: '' // Mensaje codificado usando reglas especiales
    },
    levelSeven: {
      totalLength: 0 // Suma total de la longitud de todas las palabras
    },
    levelEight: {
      reversedWords: [] // Palabras invertidas de la frase original
    },
    levelNine: {
      randomCode: '' // Código aleatorio generado en base a toda la información
    },
    levelTen: {
      finalMessage: '' // Código final calculado usando todos los niveles
    }
  };

    //1️⃣ Nivel Uno: La Cámara de las Voces Perdidas
// Extrae todas las vocales de la frase introducida y almacénalas en towerData.levelOne.vowels.
  const getVowels=(sentence)=>{
    const vowels="AEIOU";
    let totalVowels=[]; //aqui guarde las vocales

    for (const words of sentence) {
        for (const letters of words) {
            if(vowels.includes(letters.toUpperCase())){
                totalVowels.push(letters);
            }
        }
        
    }
    // console.log(totalVowels);
    return totalVowels;
  }

//   2️⃣ Nivel Dos: La Biblioteca de Consonantes Prohibidas
// Extrae todas las consonantes de la frase y almacénalas en towerData.levelTwo.consonants.
const getConsonants=(sentence)=>{
    const consonants="BCDFGHJKLMNPQRSTVWXYZ";
    const totalConsonants=[]; //aqui guardo las consonantes

    for (const words of sentence) {
        for (const letters of words){
            if(consonants.includes(letters.toUpperCase())){
                totalConsonants.push(letters.toUpperCase());
            }
        }
    }
    return totalConsonants;
}

//3️⃣ Nivel Tres: El Salón de las Palabras Fragmentadas
// Divide la frase en palabras y guárdalas en towerData.levelThree.words.

const getWords=(sentence)=>{

        const splittedSentence= sentence.split(" ");
        return splittedSentence;
    }
    

// 4️⃣ Nivel Cuatro: La Sala de la Longitud Eterna
// Calcula la longitud de cada palabra de towerData.levelThree.words y guárdalas en towerData.levelFour.wordLengths.

const getWordLength=(wordsExtracted)=>{
  // const wordsArray=getWords(sentence);
  const wordLengths=[];

  for (const words of wordsExtracted) {
    wordLengths.push(words.length);
  }

  return(wordLengths);
}

// 5️⃣ Nivel Cinco: El Espejo Dual
// Convierte cada palabra de towerData.levelThree.words a mayúsculas y guárdalas en towerData.levelFive.uppercasedWords.

const wordsToUpperCase=(wordsExtracted)=>{
  //const wordsInUpperCase=wordsExtracted.toUpperCase(); ??no puedo por que es un array??
  const wordsInUpperCase=[];

  for (const words of wordsExtracted) {
    wordsInUpperCase.push(words.toUpperCase());
    
  }
  return wordsInUpperCase;
}

// Convierte cada palabra de towerData.levelThree.words a minúsculas y guárdalas en towerData.levelFive.lowercasedWords.

const wordsTolowerCase=(wordsExtracted)=>{
  //const wordsInUpperCase=wordsExtracted.toUpperCase(); ??no puedo por que es un array??
  const wordsInLowerCase=[];

  for (const words of wordsExtracted) {
    wordsInLowerCase.push(words.toLowerCase());
    
  }
  return wordsInLowerCase;
}

//6️⃣ Nivel Seis: El Encriptador de Secretos
// Crea un mensaje secreto aplicando las siguientes reglas:

// Vocales se reemplazan por números:

// a → 1, e → 2, i → 3, o → 4, u → 5

// Investiga la función replaceAll y las expresiones regulares

// Consonantes se reemplazan por la consonante anterior en el alfabeto (excepto b -> z).

// Espacios se reemplazan por una letra aleatoria del alfabeto.

// Guarda el resultado en towerData.levelSix.secretMessage.

const replaceVowelsForNumbers=(vowelsExtracted)=>{
  let vowels=vowelsExtracted.join(""); //como las vocales vendran en array, debo pasarlas a string
  let replacedVowels=vowels
  .replaceAll(/a/gi, "1")
  .replaceAll(/e/gi, "2")
  .replaceAll(/i/gi, "3")
  .replaceAll(/o/gi, "5")
  .replaceAll(/u/gi, "1");

  return replacedVowels;
}

//   const replaceConsonantsForNumbers=(consonantsExtracted)=>{
//   let consonantsStrings=consonantsExtracted.join(""); //como las vocales vendran en array, debo pasarlas a string
//   const consonants="BCDFGHJKLMNPQRSTVWXYZ";

//   let replacedConsonants=consonantsStrings
//   .replaceAll(/B/gi, "1")
//   .replaceAll(/C/gi, "2")
//   .replaceAll(/D/gi, "3")
//   .replaceAll(/F/gi, "5")
//   .replaceAll(/G/gi, "1");

//   return replacedConsonants;

// }

//FUNCION PARA UNA LETRA RANDOM DEL ABECEDARIO
const getRandomLetter=()=> {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

  let randomLetterIndex=Math.floor(Math.random() * alphabet.length);
  let randomLetter=alphabet[randomLetterIndex]; //me da una letra en ese indice random

  return randomLetter;

}

const replaceSpaces=(sentence)=>{
  
  let replacedSpaces=sentence
  .replaceAll(/\s/g,getRandomLetter()); // /s revisa los espacios e /g general del string

  return replacedSpaces;
  
}


//7️⃣ Nivel Siete: El Oráculo de la Suma
// Calcula la suma total de las longitudes de todas las palabras obtenidas en el nivel 4 y almacénalo en towerData.levelSeven.totalLength.

const totalWordLength =(lettersPerWord)=>{
  let lettersAddition=0;
  

  for (const letters of lettersPerWord) {
    lettersAddition+=letters;
  }


  return(lettersAddition);
  

}
//8️⃣ Nivel Ocho: El Reflejo Invertido
// Invierte cada palabra del array towerData.levelThree.words y guárdalas en towerData.levelEight.reversedWords.

const reversedWords=(wordsExtracted)=>{
  const sentenceReversedWords=[];
  for (const word of wordsExtracted) {
    const reversedWord=word.split("").reverse().join('');
    sentenceReversedWords.push(reversedWord);
  }
return sentenceReversedWords;

}

//9️⃣ Nivel Nueve: La Cámara del Códex Aleatorio
// Genera un código único combinando:
// La primera letra de cada palabra invertida (nivel 8).
// Los suma de los números generados en towerData.levelSeven.totalLength dividido entre 2.
// Un número aleatorio entre 1000 y 9999.
// Almacena el código generado en towerData.levelNine.randomCode.

const firstInvertedLetter=(totalReveredWords)=>{
  let firstLetters="";
  for (const words of totalReveredWords) {
    firstLetters+=words.charAt(0);
    
  }
  return(firstLetters);
    
  }

  const totalLettersDivition=(totalLetters)=>{
    let totalLettersDivition=totalLetters/2;

    return totalLettersDivition;
  }

  const randomNumberGenerator=()=>{
    randomNumber=Math.floor(Math.random()*(9999-1000)+1000);

    return randomNumber;
  }

  //🔟 Nivel Diez: La Prueba Suprema - El Guardián del Código Final
// Usa TODOS los valores obtenidos en los niveles anteriores para generar un código maestro único.

// La fórmula del código maestro será la siguiente:

// finalMessage = (Total de vocales _ Longitud total obtenida en el nivel 7) + (Cantidad de consonantes _ Número aleatorio generado en Nivel 9) - (Número de palabras * Número de caracteres en el mensaje secreto)




  //FUNCION GENERAL
  const fillTower=(sentence)=>{
    console.log(sentence);

    //1vocales
    const vowelsExtracted=getVowels(sentence);
    towerData.levelOne.vowels = vowelsExtracted;
    console.log(vowelsExtracted);

    //2consonantes
    const consonantsExtracted=getConsonants(sentence);
    towerData.levelTwo.consonants= consonantsExtracted;
    console.log(consonantsExtracted);

    //3palabras separadas
    const wordsExtracted=getWords(sentence);
    towerData.levelThree.words=wordsExtracted;
    console.log(wordsExtracted);

    //4letras en palabras
    const lettersPerWord=getWordLength(wordsExtracted);
    towerData.levelFour.wordLengths=lettersPerWord;
    console.log(lettersPerWord);

    //5letras en mayusculas
    const allCapsWords=wordsToUpperCase(wordsExtracted);
    const lowerCaseWords=wordsTolowerCase(wordsExtracted);
    // towerData.levelFive.wordsInUpperCase=allCapsWords;
    towerData.levelFive.uppercasedWords=allCapsWords;
    towerData.levelFive.lowercasedWords=lowerCaseWords;
    console.log(`Upper case: ${allCapsWords}` );
    console.log(`Lower case: ${lowerCaseWords}` );

    //6
    const replacedVowels=replaceVowelsForNumbers(vowelsExtracted);
    const replacedSpaces=replaceSpaces(sentence);
    towerData.levelSix.secretMessage=replacedVowels + replacedSpaces;
    console.log(replacedVowels);
    console.log(replacedSpaces);

    //7
    const totalLetters=totalWordLength(lettersPerWord);
    towerData.levelSeven.totalLength=totalLetters;
    console.log(totalLetters);

    //8 palabras revered
    const totalReveredWords=reversedWords(wordsExtracted);
    towerData.levelEight.reversedWords=totalReveredWords;
    console.log(totalReveredWords);

    //9 codigo Secreto
    const secretCode=firstInvertedLetter(totalReveredWords)+totalLettersDivition(totalLetters)+randomNumberGenerator(); //lo separe por guiones para no perderme
    towerData.levelNine.randomCode=secretCode;
    console.log(secretCode);

    //10 codigo final
    const totalVowels=vowelsExtracted.length;
    const totalConsonantsNumber=consonantsExtracted.length;
    const totalWordCount=wordsExtracted.length;
    const secretCodeCharacters=secretCode.length;
    const wordsBySecretNumberCharacters=totalWordCount*secretCodeCharacters;
    const finalCode=totalVowels+"-"+ totalLetters +"-"+ totalConsonantsNumber+"-"+randomNumber+"-"+wordsBySecretNumberCharacters;
    towerData.levelTen.finalMessage=finalCode; //lo separe en guiones para leer mejor
    console.log(finalCode);


  }

fillTower("Me estoy muriendo de agobio");
console.log(towerData)

