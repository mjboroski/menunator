class Menu < ApplicationRecord
  JSON_KEYS = %w{item ingredient option}
  def as_json(opts = {})
    super.tap do |e|
    end.slice(*JSON_KEYS)
  end
end
