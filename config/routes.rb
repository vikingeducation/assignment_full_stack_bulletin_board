Rails.application.routes.draw do

  root 'static_pages#index'
  scope :api do
    scope :v1 do
      resources :posts do
        resources :comments, only: [:index]
      end
      resources :comments do
        collection do
          get 'recent'
        end
      end
    end
  end
end
