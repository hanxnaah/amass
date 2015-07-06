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

  match '/400', to: 'errors#not_found', via: :all
  match '/404', to: 'errors#not_found', via: :all
  match '/422', to: 'errors#internal_service_error', via: :all
  match '/500', to: 'errors#internal_service_error', via: :all

  scope constraints: HtmlConstraint.new do
    [
      '/organizations/sign-up',
      '/filmmakers/sign-up',
      '/success-stories',
      '/success-stories/:success_story_id',
      '/contact',
      '/about',
    ].each { |route| get route, to: 'pages#index' }
  end

  resources :organizations, only: [:create]
  resources :filmmakers, only: [:create]
  resources :followers, only: [:create]
end
