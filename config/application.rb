require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require 'active_model/railtie'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'sprockets/railtie'
# require 'rails/test_unit/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module Amass
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified
    # here.  Application configuration should go into files in
    # config/initializers -- all .rb files in that directory are automatically
    # loaded.

    # Use our router for exceptions
    config.exceptions_app = routes

    # Set Time.zone default to the specified zone and make Active Record
    # auto-convert to this zone.  Run "rake -D time" for a list of tasks for
    # finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from
    # config/locales/*.rb,yml are auto loaded.
    # load_path = Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.load_path += load_path
    # config.i18n.default_locale = :de

    config.serve_static_files = true

    config.action_mailer.delivery_method = :smtp
    config.action_mailer.raise_delivery_errors = true
    config.action_mailer.perform_deliveries = true
  end
end
