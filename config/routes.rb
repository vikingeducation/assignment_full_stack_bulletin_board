Rails.application.routes.draw do
  root 'static_pages#index'

  scope :api do
    scope :v1 do
      resources :comments
      resources :posts do
        resources :comments
      end
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
