source 'https://rubygems.org'

ruby '2.1.5'
gem 'rails', '~> 4.1.0'

gem 'high_voltage'
gem 'jbuilder', '~> 1.2'
gem 'mongoid'
gem 'newrelic_rpm'
gem 'passenger'

gem 'browserify-rails'
gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'

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
  gem 'rspec-rails', '~> 3.0.0'
  gem 'selenium-webdriver'
end

gem 'rails_12factor', group: :production
