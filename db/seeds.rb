# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


20.times do
  post = Post.create({ title: Faker::Lorem.sentence,
                body: Faker::Lorem.paragraph,
                author: Faker::Name.name } )
  post.comments.create({ author: Faker::Name.name,
                        rating: 0,
                        text: Faker::Lorem.paragraph})
end
