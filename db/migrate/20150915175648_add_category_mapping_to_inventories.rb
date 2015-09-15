class AddCategoryMappingToInventories < ActiveRecord::Migration
  def change
    add_column :inventories, :root_category_id, :integer, default: 0, null: false
    add_column :inventories, :super_category_id, :integer, default: 0, null: false
    add_column :inventories, :category_id, :integer, default: 0, null: false
    add_column :inventories, :sub_category_id, :integer, default: 0, null: false
  end
end
