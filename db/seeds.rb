AdminUser.create!(email: 'admin2@example.com', password: 'password', password_confirmation: 'password')

item = Item.create(
  name: "Hamburger",
  category: "Entrees"
)
item.ingredients.create(name: "Bun")
item.ingredients.create(name: "Beef Patty")
item.ingredients.create(name: "Lettuce")
item.ingredients.create(name: "Tomato")
item.ingredients.create(name: "Onion")

item = Item.create(
  name: "Cheeseburger",
  category: "Entrees"
)
item.ingredients.create(name: "Bun")
item.ingredients.create(name: "Beef Patty")
item.ingredients.create(name: "Lettuce")
item.ingredients.create(name: "Tomato")
item.ingredients.create(name: "Onion")
item.ingredients.create(name: "Cheese")

item = Item.create(
  name: "Hot Dog",
  category: "Entrees"
)
item.ingredients.create(name: "Bun")
item.ingredients.create(name: "Frankfurter")

item = Item.create(
  name: "Chicken Tenders",
  category: "Entrees"
)
item.ingredients.create(name: "Chicken")
item.ingredients.create(name: "Breading")

item = Item.create(
  name: "Grilled Cheese",
  category: "Entrees"
)
item.ingredients.create(name: "Cheese")
item.ingredients.create(name: "Bread")

item = Item.create(
  name: "BLT Sandwich",
  category: "Entrees"
)
item.ingredients.create(name: "Lettuce")
item.ingredients.create(name: "Tomato")
item.ingredients.create(name: "Bacon")
item.ingredients.create(name: "Bread")

item = Item.create(
  name: "French Fries",
  category: "Sides"
)
item.ingredients.create(name: "Potatoes")

item = Item.create(
  name: "Onion Rings",
  category: "Sides"
)
item.ingredients.create(name: "Onion")
item.ingredients.create(name: "Breading")

item = Item.create(
  name: "Garden Salad",
  category: "Sides"
)
item.ingredients.create(name: "Lettuce")
item.ingredients.create(name: "Tomato")
item.ingredients.create(name: "Onion")
item.ingredients.create(name: "Cucumber")

item = Item.create(
  name: "Mozzarella sticks",
  category: "Sides"
)
item.ingredients.create(name: "Cheese")
item.ingredients.create(name: "Breading")

item = Item.create(
  name: "Nachos",
  category: "Sides"
)
item.ingredients.create(name: "Nachos")
item.ingredients.create(name: "Cheese")

item = Item.create(
  name: "Macaroni and Cheese",
  category: "Sides"
)
item.ingredients.create(name: "Macaroni")
item.ingredients.create(name: "Cheese")

item = Item.create(
  name: "Chicken Noodle",
  category: "Soups"
)
item.ingredients.create(name: "Chicken")
item.ingredients.create(name: "Noodles")
item.ingredients.create(name: "Broth")

item = Item.create(
  name: "Cheddar Broccoli",
  category: "Soups"
)
item.ingredients.create(name: "Cheese")
item.ingredients.create(name: "Broccoli")
item.ingredients.create(name: "Broth")

item = Item.create(
  name: "Beef Stew",
  category: "Soups"
)
item.ingredients.create(name: "Beef")
item.ingredients.create(name: "Potatoes")
item.ingredients.create(name: "Broth")
item.ingredients.create(name: "Flour")
item.ingredients.create(name: "Carrots")

item = Item.create(
  name: "Clam Chowder",
  category: "Soups"
)
item.ingredients.create(name: "Clams")
item.ingredients.create(name: "Cream")
item.ingredients.create(name: "Potatoes")
item.ingredients.create(name: "Broth")
item.ingredients.create(name: "Flour")

item = Item.create(
  name: "Mild Chili",
  category: "Soups"
)
item.ingredients.create(name: "Beef")
item.ingredients.create(name: "Peppers")
item.ingredients.create(name: "Tomatoes")
item.ingredients.create(name: "Beans")
item.ingredients.create(name: "Onions")
item.ingredients.create(name: "Garlic")

item = Item.create(
  name: "Spicy Chili",
  category: "Soups"
)
item.ingredients.create(name: "Beef")
item.ingredients.create(name: "Peppers")
item.ingredients.create(name: "Tomatoes")
item.ingredients.create(name: "Beans")
item.ingredients.create(name: "Onions")
item.ingredients.create(name: "Garlic")
item.ingredients.create(name: "Hot Sauce")
