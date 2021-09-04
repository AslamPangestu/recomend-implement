// DATA

const ITEMS = [
    {id: 1, title: 'Jurassic Park Original Bones Backpack', price: '19.99', img: 'img/bp8uq9jpa-5.jpg' }, 
    {id: 2, title: 'Sonic The Hedgehog Adult Unisex Gaiter', price: '7.49', img: 'img/ga9llfseg-4.jpg' }, 
    {id: 3, title: 'Star Wars Storm Trooper 7 3D Mug', price: '14.99', img: 'img/abymug362.jpg' }, 
    {id: 4, title: 'Star Wars Boba Fett Metal Keyring', price: '7.99', img: 'img/abykey083.jpg' }, 
    {id: 5, title: 'Jurassic Park Rangers Snapback Cap', price: '14.99', img: 'img/sb7ke3jpa-3.jpg' },
    {id: 6, title: 'Pac-Man Maze Safe Ball Bearing Maze Money Box', price: '14.99', img: 'img/gifpal719-1.jpg' }, 
    {id: 7, title: 'Harry Potter Glasses & Scar Mens T-Shirt', price: '8.99', img: 'img/scar-glasses-black.jpg' }, 
    {id: 8, title: 'Batman Shiny Cape Knee High Socks', price: '9.99', img:'img/kh101vbtm-1.jpg' },
]
const ITEMS1 =  [ITEMS[0],ITEMS[1],ITEMS[2],ITEMS[3],ITEMS[4]];
const ITEMS1_LEN = ITEMS1.length
const ITEMS2 = [ITEMS[4],ITEMS[5],ITEMS[6],ITEMS[7],ITEMS[0]];
const ITEMS2_LEN = ITEMS2.length

const graph = createGraph(false);

// NODE1
for (let index = 0; index < ITEMS1_LEN; index++) {
    graph.addNode(ITEMS1[index])
}
for (let index = 0; index < ITEMS1_LEN - 1; index++) {
    graph.addEdge(ITEMS1[index],ITEMS1[index+1])
}

// NODE1
for (let index = 0; index < ITEMS2_LEN; index++) {
    graph.addNode(ITEMS2[index])
}
for (let index = 0; index < ITEMS2_LEN - 1; index++) {
    graph.addEdge(ITEMS2[index],ITEMS2[index+1])
}

const recomendation = graph.recommend();