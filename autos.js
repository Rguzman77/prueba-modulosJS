
export let y=23;

export let x=25;

export const automoviles = [
  { name: "Renault Megane", precio: 16000 },
  { name: "Toyota Corolla", precio: 17000 },
  { name: "Honda Civic", precio: 18000 },
];

export const precios = automoviles.map((automovil) => automovil.precio);
export const names = automoviles.map((automovil) => automovil.name);


export function someThing() {return console.log("lalalalalalalalalal");
};


