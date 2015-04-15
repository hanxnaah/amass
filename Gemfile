source 'https://rubygems.org'

ruby '2.1.5'
gem 'rails', '~> 4.2.0'

gem 'jbuilder'
gem 'mongoid'
gem 'newrelic_rpm'
gem 'passenger'

gem 'angularjs-rails', '~> 1.2.0'
gem 'angular-rails-templates'
gem 'bourbon'
gem 'foundation-rails'
gem 'gon'
gem 'jquery-rails'
gem 'sass-rails'
gem 'uglifier'

source 'https://rails-assets.org' do
  gem 'rails-assets-angular-slick'
  gem 'rails-assets-froogaloop'
  gem 'rails-assets-ng-videosharing-embed'
end

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

group :development, :test do
  gem 'rubocop'
  gem 'scss-lint'
  gem 'travis'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
end

gem 'rails_12factor', group: :production
