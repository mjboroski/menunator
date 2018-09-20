class Ingredient < ApplicationRecord
  belongs_to :item
  validates_presence_of :item
  validates :name, presence: true

end
