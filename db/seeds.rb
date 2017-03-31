# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing db..."
Post.delete_all
puts "DONE"

puts "Creating posts..."
20.times do 
  Post.create(
    title: Faker::Book.title,
    user: Faker::Book.author,
    body: Faker::Hipster.paragraph
    )
end 
puts "DONE"

puts "Creating comments..."
Post.all.each do |post|
  post.comments.create(
    body: Faker::Hipster.sentence,
    user: Faker::Book.author
    )
end
puts "DONE"