function generateMonster(){

const silhouette = randomItem(silhouettes)
const color = randomItem(colors)
const feature = randomItem(features)
const name = randomItem(names)

const description =
`この生物は${silhouette}の体型を持ち、
体色は${color}。
${feature}特徴がある未知の深海生物。`

document.getElementById("name").innerText = name
document.getElementById("silhouette").innerText = silhouette
document.getElementById("color").innerText = color
document.getElementById("feature").innerText = feature
document.getElementById("description").innerText = description

drawSilhouette(silhouette)

}

function drawSilhouette(type){

const svg = document.getElementById("silhouetteImage")

let shape = ""

switch(type){

case "クラゲ型":
shape = `<ellipse cx="150" cy="120" rx="70" ry="60"/>
<line x1="120" y1="170" x2="120" y2="240"/>
<line x1="150" y1="170" x2="150" y2="240"/>
<line x1="180" y1="170" x2="180" y2="240"/>`
break

case "イカ型":
shape = `<polygon points="150,50 210,160 90,160"/>
<line x1="110" y1="160" x2="100" y2="230"/>
<line x1="130" y1="160" x2="130" y2="240"/>
<line x1="150" y1="160" x2="150" y2="240"/>
<line x1="170" y1="160" x2="170" y2="240"/>`
break

case "タコ型":
shape = `<circle cx="150" cy="120" r="60"/>
<line x1="100" y1="160" x2="80" y2="240"/>
<line x1="120" y1="170" x2="110" y2="240"/>
<line x1="150" y1="180" x2="150" y2="240"/>
<line x1="180" y1="170" x2="190" y2="240"/>
<line x1="200" y1="160" x2="220" y2="240"/>`
break

case "魚型":
shape = `<ellipse cx="140" cy="150" rx="80" ry="40"/>
<polygon points="210,150 260,120 260,180"/>`
break

case "ヒトデ型":
shape = `<polygon points="150,50 180,130 260,130 195,180 220,260 150,210 80,260 105,180 40,130 120,130"/>`
break

case "蛇状型":
shape = `<path d="M40 180 Q120 80 200 180 T300 180" stroke-width="30" fill="none"/>`
break

case "球体型":
shape = `<circle cx="150" cy="150" r="80"/>`
break

case "浮遊体型":
shape = `<ellipse cx="150" cy="150" rx="60" ry="90"/>`
break

}

svg.innerHTML = shape

}

function copyText(){

const text =
document.getElementById("name").innerText+"\n"+
document.getElementById("description").innerText

navigator.clipboard.writeText(text)

alert("コピーしました")

}

function saveImage(){

html2canvas(document.querySelector("#result")).then(canvas=>{
const link=document.createElement("a")
link.download="deepsea-monster.png"
link.href=canvas.toDataURL()
link.click()
})

}
