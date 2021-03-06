class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  before_action :init_gon

  after_action :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected

  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end

  def init_gon
    gon.mixpanel_key = ENV.fetch('MIXPANEL_KEY') { '' }
    gon.success_stories = t('success_stories')
    gon.team_bios = t('team_bios')
    gon.faqs = t('faqs')
  end

  def not_found
    fail ActionController::RoutingError, 'Not Found'
  end
end
