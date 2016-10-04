class AddVotesToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :votes, :integer
  end
end
