class AddScoreToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :score, :integer, :default => 0
  end
end
