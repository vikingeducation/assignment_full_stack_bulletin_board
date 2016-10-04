# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Comment.destroy_all

10.times do |num|
  post = Post.create(author: "GrahamAndDylan#{num}", title: "Post#{num}", content: "This is my post numbered: #{num}")
  5.times do |num| 
    post.comments.create(author: "Graham+Dylan#{num}", content: "#{post.id} is awesome! This is comment number #{num}")
  end
end


