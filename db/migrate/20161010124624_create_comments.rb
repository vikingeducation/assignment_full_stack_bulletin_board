class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content
      t.string :author
      t.integer :score, default: 0
      t.integer :post_id

      t.timestamps null: false
    end
  end
end
