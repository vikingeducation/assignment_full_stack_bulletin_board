# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Destroying posts.."
Post.destroy_all
puts "Destroying comments.."
Comment.destroy_all


puts "Seeding posts.."
5.times do |n|
  new_post = {
    title: Faker::Book.title,
    author: Faker::Name.first_name,
    body: Faker::Lorem.sentence(3)
  }
  Post.create!(new_post)
end

puts "Seeding comments"
10.times do |n|
  new_comment = {
    author: Faker::Name.first_name,
    body: Faker::Lorem.sentence(3),
    score: [1,2,3,4,5].sample
  }
  Post.all[n % 5].comments.build(new_comment).save
end

puts "Finished!"
