def seed i
  puts 'Destroying Posts'
  Post.destroy_all

  puts 'Creating Posts'
  i.times do |i|
    Post.create(title: Faker::Lorem.word,
                author: Faker::Name.name,
                body: Faker::Lorem.characters(25))
  end

end


seed 10