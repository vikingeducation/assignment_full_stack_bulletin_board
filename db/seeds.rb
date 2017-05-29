def seed i
  puts 'Destroying Posts'
  Post.destroy_all

  puts 'Destroying Comments'
  Comment.destroy_all

  puts 'Creating Posts/Comments'
  i.times do |i|
    post = Post.create(title: Faker::Lorem.word,
                author: Faker::Name.name,
                body: Faker::Lorem.characters(25))

    post.comments.create(author: Faker::Name.name,
                           body: Faker::Lorem.characters(25),
                           score: 0)
  end

end


seed 10