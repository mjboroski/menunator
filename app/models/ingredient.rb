class Ingredient < ApplicationRecord
  attr_accessor :name
  belongs_to :item
end
