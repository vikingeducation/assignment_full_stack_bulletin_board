Rails.application.routes.draw do

  root to: 'static_pages#show'

  scope :api do
    scope :v1 do
      resources :posts, only: [:index, :create]
      resources :comments, only: [:index]
    end
  end

end
