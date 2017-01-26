Post.destroy_all
Comment.destroy_all

10.times do
Post.create(title: Faker::Lorem.sentence(3, true),
            author: Faker::Name.name,
            body: Faker::Lorem.paragraph(2))
end

30.times do
Comment.create(text: Faker::Lorem.paragraph(2),
               author: Faker::Name.name,
               post_id: Post.pluck(:id).sample,
               score: rand(10))
end