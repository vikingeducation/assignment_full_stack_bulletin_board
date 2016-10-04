class RemoveIndexFromComments < ActiveRecord::Migration
  def change

    remove_index :comments, :post_id

  end
end
