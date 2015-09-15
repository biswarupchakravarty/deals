class Inventory < ActiveRecord::Base
  belongs_to :root_category
  belongs_to :super_category
  belongs_to :category
  belongs_to :sub_category

  scope :in_stock, -> { where(in_stock: true) }
end
