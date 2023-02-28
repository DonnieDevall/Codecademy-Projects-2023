// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// console.log(mockUpStrand());

function pAequorFactory(number, dnaStrand) {
  let pAequor = {
    specimenNumber: number, 
    dna: dnaStrand, 
    mutate() {
      const basePicker = Math.floor(Math.random() * 15);
      const newBasePicker = Math.ceil(Math.random() * 3);
      switch (this.dna[basePicker]) {
        case 'A':
          switch (newBasePicker) {
            case 1:
              this.dna[basePicker] = 'T';
              break;
            case 2:
              this.dna[basePicker] = 'C';
              break;
            case 3:
              this.dna[basePicker] = 'G';
              break;
          }
        case 'T':
          switch (newBasePicker) {
            case 1:
              this.dna[basePicker] = 'A';
              break;
            case 2:
              this.dna[basePicker] = 'C';
              break;
            case 3:
              this.dna[basePicker] = 'G';
              break;
          }
        case 'C':
          switch (newBasePicker) {
            case 1:
              this.dna[basePicker] = 'T';
              break;
            case 2:
              this.dna[basePicker] = 'A';
              break;
            case 3:
              this.dna[basePicker] = 'G';
              break;
          }
        case 'G':
          switch (newBasePicker) {
            case 1:
              this.dna[basePicker] = 'T';
              break;
            case 2:
              this.dna[basePicker] = 'C';
              break;
            case 3:
              this.dna[basePicker] = 'A';
              break;
          }         
      }
    },
    compareDna(secondPaqueor) {
      let similarDna = 0;
      for(i = 0; i < 14; i++) {
        if (this.dna[i] === secondPaqueor.dna[i]) {
          similarDna++
        }
      }
      const percentDiff = Math.ceil(similarDna/15 * 100);

      return `Specimen #${this.specimenNumber} and Specimen #${secondPaqueor.specimenNumber} have ${percentDiff}% dna in common.`
    },
    willLikelySurvive() {
      let cgCount = 0;
      for (i = 0; i < 14; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cgCount++;
        }
      }

      console.log(cgCount);

      if (cgCount >= 9) {
        return true;
      } else {
        return false;
      }
    }
  }

  return pAequor;
}

let settle = pAequorFactory(1, mockUpStrand());
let dettle = pAequorFactory(2, mockUpStrand());
console.log(settle);
settle.mutate();
console.log(settle);
console.log(settle.compareDna(dettle));
console.log(settle.willLikelySurvive());








