# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



titles = ["Awesome Post", "Decent Post", "Subpar Post"]
content = ["I a super awesome post you can hear my roar from miles away", "I am just a decent post don't get your expectations too high", "I am a subpar post please give me advice on how to get better"]
authors = ["Batman", "Superman", "Spiderman"]


puts "creating posts"
0.upto(2) do |i|

  p = Post.new(title: titles[i], content: content[i], author: authors[i])

  p.save!

end

comment_content = ["foo content awesome here we go more content", "comment body I am awesome comment", "I am a boring comment nothing to see here", "I don't want to be a comment but I am stuck a comment darn", "hey I'm glad there's lots of friendly comments here", "I am a mean comment hahah watch out other comments", "is this enough comments yet", "posts stink, comments rule", "I am the best database column in the whole database", "what does a frog say", "hello everybody glad to meet you i am a comment", "enough comments already"]

puts "creating comments"
0.upto(12) do |j|
  c = Comment.new(content: comment_content.sample, author: authors.sample, post_id: [1,2,3].sample, score: 0)

  c.save!

end