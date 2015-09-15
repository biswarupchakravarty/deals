class CreateInventories < ActiveRecord::Migration
  def change
    create_table :inventories do |t|
      t.column :in_stock, :boolean, default: true
      t.timestamps null: false
    end
  end
end
