class AddLikesToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :likes, :integer
  end
end
