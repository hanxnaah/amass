source 'https://rubygems.org'

ruby '2.2.2'
gem 'rails', '~> 4.2.0'

gem 'jbuilder'
gem 'mongoid'
gem 'newrelic_rpm'
gem 'passenger'
gem 'sprockets', '< 3'

gem 'angularjs-rails', '~> 1.3.0'
gem 'angular-rails-templates'
gem 'bourbon'
gem 'foundation-rails'
gem 'gon'
gem 'haml-rails'
gem 'roadie-rails'
gem 'sass-rails'
gem 'uglifier'
gem 'zurb-ink-rails'

source 'https://rails-assets.org' do
  gem 'rails-assets-angular-slick'
  gem 'rails-assets-angular-asset-path'
  gem 'rails-assets-angulartics'
  gem 'rails-assets-mixpanel'
  gem 'rails-assets-ng-currency'
  gem 'rails-assets-ng-videosharing-embed'
  gem 'rails-assets-vimeo-jquery-api'
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :development, :test do
  gem 'haml-lint'
  gem 'mailcatcher'
  gem 'rubocop'
  gem 'scss-lint'
end

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
end

gem 'rails_12factor', group: :production
