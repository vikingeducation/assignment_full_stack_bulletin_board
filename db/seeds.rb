# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.destroy_all
Comment.destroy_all

5.times do

  current_post = Post.create(author: Faker::Name.name, body: Faker::Lorem.sentence, title: Faker::Lorem.sentence, date: DateTime.now )
  5.times do
  	current_post.comments.create(author: Faker::Name.name, body: Faker::Lorem.sentence, date: rand(1.years).seconds.ago, voteCount: 0)
  end

end
