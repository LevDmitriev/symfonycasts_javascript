let foods = new WeakMap();
let southrsUSStates = ['Tenesee', 'Kentucky', 'Texas'];

foods.set(['italian'], 'gelato');
foods.set(['mexican'], 'torta');
foods.set(['canadian'], 'poutine');
foods.set(southrsUSStates, 'hot chicken');

console.log(foods.get(['italian']), foods.get(southrsUSStates), foods.size);