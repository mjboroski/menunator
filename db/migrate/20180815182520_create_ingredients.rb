class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string "name"
      t.bigint "item_id"
      t.index ["item_id"], name: "index_ingredients_on_menu_item_id"
      
      t.timestamps
    end
  end
end
