class Rat {
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }
    
    unite(otherRat){
       if(otherRat instanceof Rat){
           this.unitedRats.push(otherRat);
       }
    } 
    getRats(){
        return this.unitedRats;
    }

    toString(){
        let result = this.name + '\n';
        for(let rat of this.unitedRats){
            result+=`##${rat.name}`+'\n';
        }
        return result.trim();
       }
   
}

let test = new Rat('Pesho');
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat('Gosho'));
test.unite(new Rat('Sasho'));

console.log(test.getRats());
//[ Rat { name: &#39;Gosho&#39;, unitedRats: [] },
// Rat { name: &#39;Sasho&#39;, unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho