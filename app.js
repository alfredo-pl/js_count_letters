document.addEventListener("DOMContentLoaded", function(event) { 
    //div
    var res = document.getElementById('resultados');
    //get content
    var text = document.getElementById('texto-entrada');
    //replace content and transform to array
    var array = text.textContent.replace(/(\r\n|\,|\.|\n|\r)/gm, "").split(" ");
    //filter
    let fil_array = array.filter(word => word.length > 0);
    
    letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0
    }

    words={}

    //F count letters
    function countLetters(fil_array){
        for(var i = 0; i < fil_array.length; i++){
            //aqui se hace un arreglo de la palabra
            let arr = [...fil_array[i].toLowerCase()];
            arr.forEach(element => letters[element]+=1 );
        };

        for (const j in letters) {
            var div = document.createElement('div');
            let p = `<p><strong>${j}: </strong><span>${letters[j]}</span></p>`; 
            div.innerHTML = p;
            res.appendChild(div);
        }
        
    }
    //F count Words
    function countWords(fil_array){
        fil_array.forEach(element => words[element.toLowerCase()]=0);
        fil_array.forEach(element => words[element.toLowerCase()]+=1);
        
        for (const j in words) {
            var div = document.createElement('div');
            let p = `<p><strong>${j}: </strong><span>${words[j]}</span></p>`; 
            div.innerHTML = p; 
            div.innerHTML = p;
            res.appendChild(div);
        }
    }

    //Execute
    countLetters(fil_array);
    countWords(fil_array)
});
