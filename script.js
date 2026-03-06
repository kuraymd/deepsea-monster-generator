
async function getImage(name){

const url = `https://ja.wikipedia.org/api/rest_v1/page/summary/${name}`;

const res = await fetch(url);
const data = await res.json();

return data.thumbnail ? data.thumbnail.source : null;

}

async function generate(){

const creature = creatures[Math.floor(Math.random()*creatures.length)];
const motif = motifs[Math.floor(Math.random()*motifs.length)];

document.getElementById("name").textContent = creature.name;
document.getElementById("desc").textContent = creature.desc;
document.getElementById("motif").textContent = motif;

const img = await getImage(creature.wiki);

if(img){
document.getElementById("image").src = img;
}

}
