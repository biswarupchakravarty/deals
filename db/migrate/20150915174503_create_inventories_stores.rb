class CreateInventoriesStores < ActiveRecord::Migration
  def change
    create_table :inventories_stores do |t|
      t.references :store
      t.references :inventory
    end
  end
end
