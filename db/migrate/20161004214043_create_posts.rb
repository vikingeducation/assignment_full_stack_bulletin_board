class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :body
      t.string :author
      t.string :title
      t.timestamps
    end
  end
end
