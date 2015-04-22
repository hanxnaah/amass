class HtmlConstraint
  def matches?(request)
    accept_format(request).include?('text/html')
  end

  def accept_format(request)
    # not all request headers have an 'Accept', so we default to 'text/html'
    request.headers['Accept'] || 'text/html'
  end
end

Amass::Application.routes.draw do
  root to: 'pages#index'
  scope constraints: HtmlConstraint.new do
    get '*path', to: 'pages#index'
  end

  resources :organizations, only: [:create]
  resources :filmmakers, only: [:create]
  resources :followers, only: [:create]
end
