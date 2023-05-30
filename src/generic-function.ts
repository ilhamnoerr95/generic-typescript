// DENGAN ADANYA GENERIC FUNGSI APABILA FUNGSI TERSEBUT ININ DIGUNAKAN KEMBALI MAKA
// generic akan membantu typescript dalam membaca isi dari return fungsi tersebut

function merge<T extends {}, U>(ObjA:T, ObjB: U){
    return Object.assign(ObjA, ObjB);
}

const result = merge({break: "atom"},{berak:"atam"});
console.log(result.break)