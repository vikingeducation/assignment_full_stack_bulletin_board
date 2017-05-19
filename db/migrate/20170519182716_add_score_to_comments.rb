class AddScoreToComments < ActiveRecord::Migration[5.0]
  def up
     add_column :comments, :score, :integer
   end

  def down
   remove_column :comments, :score
  end
end
