export class Note {
    title: string;
    content: string;
    createDate?: string;
    tags?: Array<string>;
    id?: number;
}

const note = {
    title: "AAAA",
};
note.title = "BBBB";

const str = "23";
const nm = +str;

const studenci: any[] = [];

studenci.toString();

const ludzie: any[] = [];
const kasia = { imie: "Kasia", wiek: 20 };
const tomek = { imie: "Tomek", wiek: 30 };

ludzie.push(kasia, tomek);

//łączenie tablicy
const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2 = [1, 2, 3, 4, 5, 6, 11];
const b = [...a1, ...a2];

//iteracja

b.forEach((value) => { });

for (const item of b) {
}

//Szukanie indexu
const kasiaIndex = ludzie.findIndex((ludzie) => ludzie.imie === "Kasia");
const kasiaIndex2 = ludzie.findIndex(searchStudent);
const kasiaCopy = ludzie.find(searchStudent);

function searchStudent(student: any) {
    return student.imie === "Kasia";
}

//Wycinanie
b.splice(0, 1);

//filter

const studentsBefore20 = ludzie.filter((st) => st.wiek < 20);
const newStudenci = ludzie.filter((st) => st.imie != "Kasia");

//mapowanie
ludzie.map((st) => {
    st.wiek++;
    return st;
});

//ludzie.some()
//ludzie.every()

//ludzie.length()

for (const stKey in ludzie) {
    const im = ludzie[stKey];
}

class Student {
    imie: string;
    wiek: number;
    _rokStudiow: number;
    constructor(st: Student) {
        this.imie = st.imie;
        this.wiek = st.wiek;
    }

    get rokStudiow(): number {
        return this._rokStudiow;
    }
    set rokStudiow(value: number) {
        this._rokStudiow = value;
    }
    getRokStudiow(): number {
        return this._rokStudiow;
    }
}

let jozio: Student;
jozio.rokStudiow = 14;

function multByTwo(value:string|number):number{
    return value*2
}

//TypeOf
function multByTwoWithGuard(value:string|number):number{
    if(typeof value ==='number'){
        return value*2
    }else{
        return +value*2;
    }
}

//Guard 2
interface Animal{}

// app.delete('/note/:id',(req,res)=>{
//   const { id } = req.params
//   const ID =+id

//   notatka = notatka.filter((note)=>note.id!==ID) //true trzyma w tablicy

//   res.send("poszedł w piach")
  
// })