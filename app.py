from flask import Flask
from flask import request, jsonify
from flask_cors import CORS
from chatgpt_wrapper import ChatGPT


app = Flask(__name__)
CORS(app)

bot = ChatGPT()
app.config["DEBUG"] = True
restaurants = ["Chipotle", "Sweetgreen", "Panera Bread", "Veggie Grill", "Noodles & Company", "Moe's Southwest Grill", "Blaze Pizza", "Bareburger", "Native Foods Cafe", "Just Salad", "Cava", "Tender Greens", "Flower Child", "Le Pain Quotidien", "LYFE Kitchen", "True Food Kitchen", "Shake Shack", "Veggie Galaxy", "The Loving Hut", "The Veggie Table", "Maoz Vegetarian", "The Little Beet", "Chop't Creative Salad Company", "The Counter", "Tossed", "Eatsa", "B. Good", "Dig Inn", "Zoës Kitchen", "Modern Market Eatery", "CoreLife Eatery", "Freshii", "Falafel Guys", "Luna Grill", "Mellow Mushroom", "Salata", "Green Leaf's Beyond Great Salads", "Baja Fresh", "Pollo Tropical", "Portillo's", "LYFE Kitchen", "Boston Market", "Tropical Smoothie Cafe", "Denny's", "Qdoba Mexican Eats", "El Pollo Loco", "Jamba Juice", "McAlister's Deli", "Blaze Pizza", "La Madeleine", "Salad and Go", "BurgerFi", "Costa Vida", "Jollibee", "Togo's Sandwiches", "Teriyaki Madness", "Habit Burger Grill", "Raising Cane's Chicken Fingers", "Eat'n Park", "Melt Shop", "Lucille's Smokehouse Bar-B-Que", "Hurricane Grill & Wings", "First Watch", "Nothing Bundt Cakes", "Pita Pit", "Bar Louie", "P.F. Chang's China Bistro", "Carrabba's Italian Grill", "The Cheesecake Factory", "The Old Spaghetti Factory", "California Pizza Kitchen", "Maggiano's Little Italy", "Yard House", "BJ's Restaurant & Brewhouse", "Red Robin Gourmet Burgers and Brews", "Fogo de Chão Brazilian Steakhouse", "Ruth's Chris Steak House", "LongHorn Steakhouse", "Fleming's Prime Steakhouse & Wine Bar", "Morton's The Steakhouse", "Outback Steakhouse", "Carrabba's Italian Grill", "Bonefish Grill", "Legal Sea Foods", "Pappadeaux Seafood Kitchen", "Red Lobster", "Joe's Crab Shack", "Olive Garden", "Bubba Gump Shrimp Co.", "Bahama Breeze", "TGI Fridays", "Applebee's", "Chili's Grill & Bar", "Buffalo Wild Wings", "Hard Rock Cafe", "Rainforest Cafe", "Planet Hollywood", "Denny's", "IHOP"]

@app.route("/", methods=["GET", "POST"])
def match_restaurants_route():
    if request.method == "POST":
        foods = request.json["foods"]
        question = "My favorite foods are: "
        for i in range(len(foods)):
            question += foods[i]
            if i != len(foods) - 1:
                question += ", "
        question += ".\n"
        question += "Based on my favorite foods, pick 5 restaurants from the following list of restaurants that I would most enjoy: "
        for i in range(len(restaurants)):
            question += restaurants[i]
            if i != len(restaurants) - 1:
                question += ", "
        question += ".\nDo not output any text besides the names of the restaurants. Specifically, the first word of your response should be the name of a restaurant. Separate each restaurant by comma and space."
        response = bot.ask(question)
        top_restaurants = response.split(", ")
        return jsonify({"restaurants": top_restaurants}) # returns the response from chatGPT

app.run()
