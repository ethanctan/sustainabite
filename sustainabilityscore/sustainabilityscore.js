
// IN THE CASE OF HOME-COOKED MEAL

// ingredients: dict with key as ingredient used, value of percentage of food
// freerange: dict with key as ingredient used, value of organic/free-range or not (True or False)
// methods: list of methods of cooking used
// obtained: how ingredients were obtained

function homecookedscore(ingredients, freerange, methods, obtained) {
    const ingredientscores = {
      "Meat (beef or lamb)": 70,
      "Meat (pork)": 20,
      "Meat (turkey or chicken)": 10,
      "Meat (fish or seafood)": 16,
      "Other meat": 30,
      "Cheese": 24,
      "Eggs": 8,
      "Milk": 14,
      "Other dairy": 16,
      "Starches or legumes": 4,
      "Fruits or vegetables": 2,
    };
  
    const methodscores = {
      "Gas/electric stove": 33,
      "Oven": 27,
      "Grill": 36,
      "Slow cooker": 18,
      "Pressure cooker": 15,
      "Microwave": 9,
      "Other": 24,
    };
  
    let avg1 = 100;
    for (let ingredient in ingredients) {
      if (!freerange[ingredient]) {
        avg1 -= ingredients[ingredient] * ingredientscores[ingredient];
      } else {
        avg1 -= ingredients[ingredient] * 0.75 * ingredientscores[ingredient];
      }
    }
  
    let avg2 = 0;
    let nmethods = 0;
    for (let i = 0; i < methods.length; i++) {
      avg2 += methodscores[methods[i]];
      nmethods += 1;
    }
    avg2 = 100 - avg2 / nmethods;
  
    let avg3 = 0;
    switch (obtained) {
      case "I drove my car":
        avg3 = 70;
        break;
      case "I took public transportation":
        avg3 = 88;
        break;
      case "I walked":
        avg3 = 94;
        break;
      default:
        avg3 = 76;
        break;
    }
  
    return Math.round(0.6 * avg1 + 0.3 * avg2 + 0.1 * avg3);
  }

// IN THE CASE OF EATING OUT

// ingredients = same as before
// freerange = same as before
// restsize = "Chain", "Local", or "Unsure"
// extras = list of possible extra considerations for the restaurant

function eatingoutscore(ingredients, freerange, restsize, extras) {

    const ingredientscores = {
        "Meat (beef or lamb)": 70,
        "Meat (pork)": 20,
        "Meat (turkey or chicken)": 10,
        "Meat (fish or seafood)": 16,
        "Other meat": 30,
        "Cheese": 24,
        "Eggs": 8,
        "Milk": 14,
        "Other dairy": 16,
        "Starches or legumes": 4,
        "Fruits or vegetables": 2
    };

    const extrascores = {
        "Compost food waste": -6,
        "Recycle package waste": -4,
        "Locally sourced ingredients": -5,
        "Use energy-efficient appliances": -2,
        "Non-reusable tableware or silverware": 30,
        "Deep-fried or grilled food": 15,
        "Ingredients are in-season": -8
    };

    let avg1 = 100;
    for (let ingredient in ingredients) {
        if (!freerange[ingredient]) {
            avg1 -= ingredients[ingredient] * ingredientscores[ingredient];
        } else {
            avg1 -= ingredients[ingredient] * 0.75 * ingredientscores[ingredient];
        }
    }

    let avg2 = 100;
    for (let extra of extras) {
        avg2 -= extrascores[extra];
    }

    if (restsize === "Chain") {
        return Math.round(((avg1 + avg2) / 2) - 20);
    } else if (restsize === "Local") {
        return Math.round(((avg1 + avg2) / 2) - 10);
    } else {
        return Math.round(((avg1 + avg2) / 2) - 15);
    }
}
