class AddColumnToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :rating, :integer, :default => 0
  end
end
