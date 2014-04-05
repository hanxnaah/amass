class OrganizationsController < ApplicationController

  def create
    organization = Organization.new(organization_params)
    status = organization.save ? 201 : 400
    render json: organization, status: status
  end

  private

  def organization_params
    params.permit(:budget, :contact_email, :contact_name, :deadline, :description, :extra_resources, :video_length, :location, :organization_name, :organization_description, :project_name, :project_blurb, :inspiration_links, :payment_includes_expenses)
  end
end

