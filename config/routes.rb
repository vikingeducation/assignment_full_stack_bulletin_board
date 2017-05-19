Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#index"
  resource "static_pages"

  scope "api" do
    scope "v1" do
      resources :posts, only: [:index]
      resources :comments, only: [:index]
    end
  end
end
