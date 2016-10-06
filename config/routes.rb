Rails.application.routes.draw do

  get 'posts/index'

  get 'posts/show'

  root 'static_pages#index'

  get 'static_pages/index'
  scope 'api' do
    scope 'v1' do
      resources :posts do
        resources :comments, only: [:index, :update]
      end
      resources :comments, only: [:create]
      get 'comments/all', to: 'comments#all'
    end
  end
end
