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
    const consonants="BCDEFGHJKLMNPQRSTVWXYZ";
    let totalConsonants=[]; //aqui guardo las consonantes

    for (const words of sentence) {
        for (const letters of words){
            if(consonants.includes(letters.toUpperCase())){
                totalConsonants.push(letters);
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
    



  //FUNCION GENERAL
  const fillTower=(sentence)=>{
    console.log(sentence);

    //vocales
    const vowelsExtracted=getVowels(sentence);
    towerData.levelOne.vowels = vowelsExtracted;
    console.log(vowelsExtracted);

    //consonantes
    const consonantsExtracted=getConsonants(sentence);
    towerData.levelTwo.consonants= consonantsExtracted;
    console.log(consonantsExtracted);

    //palabras separadas
    const wordsExtractes=getWords(sentence);
    towerData.levelThree.words=wordsExtractes;
    console.log(wordsExtractes);

  }

fillTower("Me estoy muriendo de agobio");
console.log(towerData)

