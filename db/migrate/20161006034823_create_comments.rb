class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body
      t.string :author
      t.integer :post_id, index: true
      t.integer :score, default: 0

      t.timestamps
    end
  end
end
