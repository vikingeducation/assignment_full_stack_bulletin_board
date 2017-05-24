# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AUTHOR_LIST = [
  "Merf",
  "Ferb",
  "Bert",
  "Rupt",
]

POST_LIST = []

COMMENT_LIST = [
  "You make a good point",
  "Nope",
  "Delete your account",
  "I never thought of it that way",
  "I could not agree more",
  "You have just won the internet"
]


puts "Destroying posts"
Post.destroy_all
puts "Destroying comments"
Comment.destroy_all

POST_COUNT = 10
COMMENT_COUNT = 3

puts("Createing Posts")
POST_COUNT.times do |n|
  author = AUTHOR_LIST.sample
  body = "bla " * n
  title = "Title #{n}"
  POST_LIST << Post.create(author: author, body: body)
end

puts("Adding Comments to each post")
POST_LIST.each do |post|
  COMMENT_COUNT.times do |n|
    num = (post.id * n) + 1
    title = "Comment title #{num}"
    author = AUTHOR_LIST.sample
    comment = COMMENT_LIST.sample
    score = (post.id * n) - 25
    post.comments.create(title: title, author: author, body: comment, score: score)
  end
end
