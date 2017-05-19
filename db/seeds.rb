# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

authors_list = [
  "Merf",
  "Ferb",
  "Bert",
  "Rupt",
]

10.times do |n|
  author = authors_list.sample
  body = "bla " * n
  Post.create(author: author, body: body)
end
