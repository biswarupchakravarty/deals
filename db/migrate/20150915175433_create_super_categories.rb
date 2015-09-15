class CreateSuperCategories < ActiveRecord::Migration
  def change
    create_table :super_categories do |t|
      t.column :name, :string, null: false
      t.timestamps null: false
    end
  end
end
