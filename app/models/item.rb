class Item < ApplicationRecord
  alias_attribute :ingredients_attributes, :ingredients
  has_many :ingredients
end
