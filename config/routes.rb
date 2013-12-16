Amass::Application.routes.draw do
  root to: "high_voltage/pages#show", id: "home"

  resources :charities, only: [:create]
  resources :filmmakers, only: [:create]
  resources :followers, only: [:create]
end
