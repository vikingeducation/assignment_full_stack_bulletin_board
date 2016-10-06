# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

puts "Destroy all posts"
Post.destroy_all
puts "Posts destroyed"

puts "generating posts"
5.times do
  new_post = Post.new
  new_post.title = Faker::Book.title
  new_post.body = Faker::Lorem.paragraph
  new_post.author = Faker::Book.author
  new_post.save!
end
puts "posts generated"
