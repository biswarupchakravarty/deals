class CreateSubCategories < ActiveRecord::Migration
  def change
    create_table :sub_categories do |t|
      t.column :name, :string, null: false
      t.timestamps null: false
    end
  end
end
