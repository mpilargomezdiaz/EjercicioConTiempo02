let Array_emoji = new Array ();

let datos_emoji = [
    {
      "emoji": "ðŸ˜€",
      "hexcode": "1F600",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning face",
      "tags": "face, grin",
      "openmoji_tags": "smile, happy",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 1,
      "order": 1
    },
    {
      "emoji": "ðŸ˜ƒ",
      "hexcode": "1F603",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning face with big eyes",
      "tags": "face, mouth, open, smile",
      "openmoji_tags": "eyes, teeth",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 2
    },
    {
      "emoji": "ðŸ˜„",
      "hexcode": "1F604",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "grinning face with smiling eyes",
      "tags": "eye, face, mouth, open, smile",
      "openmoji_tags": "happy, teeth",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 3
    },
    {
      "emoji": "ðŸ˜",
      "hexcode": "1F601",
      "group": "smileys-emotion",
      "subgroups": "face-smiling",
      "annotation": "beaming face with smiling eyes",
      "tags": "eye, face, grin, smile",
      "openmoji_tags": "happy, teeth, mouth",
      "openmoji_author": "Emily JÃ¤ger",
      "openmoji_date": "2018-04-18",
      "skintone": "",
      "skintone_combination": "",
      "skintone_base_emoji": "",
      "skintone_base_hexcode": "",
      "unicode": 0.6,
      "order": 4
    }
]

console.log(datos_emoji[0]["hexcode"]);

let emojis = datos_emoji.map(emoticono => emoticono["hexcode"]);
Array_emoji.push(emojis);
console.log("El nuevo array de los emojis es el siguiente: " + Array_emoji);


let em_1 = Array_emoji[0][0];
let em_2 = Array_emoji[0][1];
let em_3 = Array_emoji[0][2];
let em_4 = Array_emoji[0][3];

console.log("Este es el em1: " + em_1);
console.log("Este es el em2: " + em_2);
console.log("Este es el em3: " + em_3);
console.log("Este es el em4: " + em_4);


let url = "https://openmoji.org/data/";
url.split("/");
puls = 0;
function primeraSeleccion() {
    if(puls==0){
    url = url+"color/svg/"+ em_1 +".svg";
console.log(url);
puls++
aparicion_emoji()
    }
}
function segundaSeleccion() {
    if(puls==0){
    url = url+"color/svg/"+ em_2 +".svg";
console.log(url);
puls++
aparicion_emoji()
    }
}
function terceraSeleccion() {
    if(puls==0){
    url = url+"color/svg/"+ em_3 +".svg";
console.log(url);
puls++
aparicion_emoji()
    }
}
function cuartaSeleccion() {
    if(puls==0){
    url = url+"color/svg/"+ em_4 +".svg";
console.log(url);
puls++
aparicion_emoji()
    }
}

function aparicion_emoji() {
    let div_contenedor = document.getElementById("emoji");
    let imagen_emoticono = document.createElement("img");
    imagen_emoticono.src = url;
    div_contenedor.appendChild(imagen_emoticono);  
}


