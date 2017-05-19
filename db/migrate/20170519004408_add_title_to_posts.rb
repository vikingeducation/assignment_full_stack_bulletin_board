class AddTitleToPosts < ActiveRecord::Migration[5.0]
  def self.up
   add_column :posts, :title, :string
 end

 def self.down
   remove_column :posts, :title
 end
end
