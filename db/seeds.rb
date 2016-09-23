# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


puts 'Creating posts'
10.times do |i|
  Post.create(title: "cool article n° #{i}", author: "Jean", body: "blah, blah blah, blah blah blah")
end

puts 'Finished creating posts'

puts 'Creating comments'
10.times do |i|
  Comment.create(author: "Jean", body: "oh yes, definitely #{i}", post_id: Post.first.id, score: 0)
end

puts 'Finished creating comments'