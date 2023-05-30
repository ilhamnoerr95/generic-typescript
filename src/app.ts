// constrain untuk generic, dengan menggunakan "extends" kita akan menetapkan spesific generic
// agar kita mengetahui error yg terjadi di dalam typescript

function merging<T extends {}, U extends object>(ObjA:T, ObjB: U){
    return Object.assign(ObjA, ObjB);
}

const hasil = merging({break: "atom", broke:"biji"},{b: 10});

// ! hasil dibawah ini tidak menghasilkan error karena generic yg dibuat tidak menggunakan generic specific/ extends
// perlu diperhatikan untuk return membutuhkan params objek, karena hanya menggunaka generic umum yg dimana semua param bertipe apa saja boleh digunakan 
// serta tidak menghasilkan error
// const hasil = merging({break: "atom", broke:"biji"},10);

console.log(hasil["break"])


// another generic
interface Lenghty {
    length: number,
    
}
function countDescribe<T extends Lenghty > (element:T){
    let desc = "No Value"
    if(element.length === 1) {
        desc = "have 1 Element"
    } else if (element.length > 1) {
        desc = "Got value "+ element.length + " appear!"
    }
    return [element, desc]
}

console.log(countDescribe([{pler:"atut"}]))
// console.log(countDescribe({pler: "atut"}))



// KEYOF CONSTRAINS
// menggunakan keyof untuk membaca pola dari key object dari params object/genericnya

function extractKey<T extends object, U extends keyof T>(obj: T, key: U){
    return "value " + obj[key]
}

console.log(extractKey({name: "String"}, "name"))


// GENERIC CLASS
class DataStorage<T extends string | number | boolean>{
    private data: T[]= [];
    
    addItem(item: T){
        this.data.push(item)
    }

    removeItem(item: T){
        if(this.data.indexOf(item) == -1){
            return
        }
        console.log(this.data.indexOf(item))
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItem(){
        return this.data
    }
}

const storage = new DataStorage();
storage.addItem("fulus")
storage.addItem(2)
storage.removeItem("fulus")
console.log(storage.getItem())

// GENERIC UTILITIES TYPES
interface Goal {
    title: string,
    desc: string,
    date: Date
}

function getGoal(ti: string, des: string, tggal: Date): Goal{
    let setGoal: Partial <Goal> ={}
    setGoal.title = ti
    setGoal.desc = des
    setGoal.date = tggal

    return setGoal as Goal
}