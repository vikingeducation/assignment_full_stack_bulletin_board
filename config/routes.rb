Rails.application.routes.draw do
  root "static_pages#index"

  scope :api do 
    scope :v1 do
      resources :posts, only: [:index, :create, :show]
      resources :comments, only: [:index, :create]
    end
  end

end
