class ErrorsController < ApplicationController
  def not_found
    render status: :not_found, template: 'pages/index'
  end

  def internal_service_error
    render status: :internal_service_error, template: 'pages/index'
  end
end
