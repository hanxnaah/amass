class OrganizationsController < ApplicationController

  def create
    organization = Organization.new(organization_params)
    status = organization.save ? 201 : 400
    render json: organization, status: status
  end

  private

  def organization_params
    params.permit(:budget, :contact_email, :contact_name, :deadline, :description, :extra_resources, :length, :location, :organization_name, :project_name)
  end
end

