class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :text, null: false
      t.string :author, null: false
      t.integer :post_id, null: false

      t.timestamps null: false
    end
  end
end
