Amass::Application.routes.draw do
  root to: 'pages#index'

  resources :organizations, only: [:create]
  resources :filmmakers, only: [:create]
  resources :followers, only: [:create]
end
