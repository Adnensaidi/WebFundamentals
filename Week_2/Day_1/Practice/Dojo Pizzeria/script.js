function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;  
    pizza.sauceType = sauceType;  
    pizza.cheeses = cheeses;      
    pizza.toppings = toppings;    
    return pizza;                 
}

// Create pizzas
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

// Create two more pizzas
var pizza3 = pizzaOven("thin crust", "bbq", ["cheddar"], ["chicken", "red onions"]);
var pizza4 = pizzaOven("stuffed crust", "alfredo", ["parmesan", "mozzarella"], ["spinach", "artichokes", "sun-dried tomatoes"]);

// Display the pizzas
console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);