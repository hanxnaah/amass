class OrganizationsController < ApplicationController
  def create
    organization = Organization.new(organization_params)
    status =
      if organization.save
        AdminMailer.new_organization(organization).deliver_later
        201
      else
        400
      end

    render json: organization, status: status
  end

  private

  def organization_params
    params.require(:organization).permit(
      :budget, :contact_email, :contact_name, :deadline, :description,
      :extra_resources, :video_length, :location, :organization_name,
      :organization_description, :project_name, :project_blurb,
      :inspiration_links, :payment_includes_expenses, :payment
    )
  end
end
