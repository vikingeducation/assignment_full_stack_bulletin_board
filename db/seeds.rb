# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Destroy All"
Post.destroy_all
Comment.destroy_all
puts "All destroyed"

puts "generating posts"
5.times do
  new_post = Post.new
  new_post.title = Faker::Book.title
  new_post.body = Faker::Lorem.paragraph
  new_post.author = Faker::Book.author
  new_post.save!
end
puts "posts generated"

puts "generating comments"
15.times do
  new_comment = Comment.new
  new_comment.body = Faker::Lorem.sentence
  new_comment.author = Faker::Book.author
  new_comment.post_id = Post.pluck(:id).sample
  new_comment.save!
end
puts "comments generated"
