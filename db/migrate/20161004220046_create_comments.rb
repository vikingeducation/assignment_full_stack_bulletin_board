class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :text
      t.string :author
      t.integer :post_id
      t.timestamps null: false
    end
    add_index :comments, :post_id, unique: true
  end
end
