Rails.application.routes.draw do

  root 'static_pages#index'
  scope :api do
    scope :v1 do
      resources :posts do
        resources :comments, only: [:index, :update, :create]
      end
      resources :comments, :except => [:new, :edit]
    end
  end
end
