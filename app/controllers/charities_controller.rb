class CharitiesController < ApplicationController

  def create
    charity = Charity.new(charity_params)
    status = charity.save ? 201 : 400
    render json: charity, status: status
  end

  private

  def charity_params
    params.permit(:budget, :contact_email, :contact_name, :deadline, :description, :extra_resources, :length, :location, :organization_name, :project_name)
  end
end

