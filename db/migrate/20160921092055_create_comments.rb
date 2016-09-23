class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :author, null: false
      t.text :body, null: false
      t.integer :post_id, null: false
      t.integer :score, null: false

      t.timestamps null: false
    end
  end
end
