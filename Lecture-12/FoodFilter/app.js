

const menu = ['Chhole Kultche', 'Kadhai Chicken', 'Kadhai Paneer',
    'Dal Makhni', 'Jeera Rice', 'Palak Paneer', 'Onion Rings',
    'Garlic Bread', 'Egg Curry', 'Onion Parantha', 'Garlic Naan',
    'Pizza', 'Pav Bhaaji', 'Chicken Korma', 'Butter Chicken',
    'Malai Chaap', 'Hydrabadi Chicken Biryaani', 'Salad',
    'Lemon and Garlic Roast Chicken', 'Garlic Rasam'];



function isVeg(food) {
    
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(food) {
    
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {
        return false;
    }
    return true;
}



const vegMenu = menu.filter(isVeg);
const jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);