class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.column :name, :string, null: false
      t.column :address, :string, null: false
      t.column :lat, :decimal, precision: 9, scale: 6
      t.column :lng, :decimal, precision: 9, scale: 6

      t.timestamps null: false
    end
  end
end
