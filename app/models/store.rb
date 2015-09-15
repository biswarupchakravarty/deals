class Store < ActiveRecord::Base
  acts_as_mappable default_units: :kms

  validates :name, :address, presence: true

  has_and_belongs_to_many :inventories

  def add_inventory! details
    transaction do
      inventory = Inventory.joins(:root_category).joins(:super_category).joins(:category).joins(:sub_category)
        .where(root_categories: { name: details[:root_category][:name] })
        .where(super_categories: { name: details[:super_category][:name] })
        .where(categories: { name: details[:category][:name] })
        .where(sub_categories: { name: details[:sub_category][:name] }).first_or_create!({
          root_category: RootCategory.new({ name: details[:root_category][:name] }),
          super_category: SuperCategory.new({ name: details[:super_category][:name] }),
          category: Category.new({ name: details[:category][:name] }),
          sub_category: SubCategory.new({ name: details[:sub_category][:name] })
        })
      inventories << inventory
    end
  end
end
