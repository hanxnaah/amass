Amass::Application.routes.draw do
  root to: "high_voltage/pages#show", id: "home"

  resources :charities, only: [:create]
  resources :videographers, only: [:create]
  resources :followers, only: [:create]
end
