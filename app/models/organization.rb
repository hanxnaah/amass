class Organization
  include Mongoid::Document

  field :payment, type: Integer
  field :payment_includes_expenses, type: Boolean
  field :contact_email, type: String
  field :contact_name, type: String
  field :deadline, type: Date
  field :description, type: String
  field :extra_resources, type: String
  field :video_length, type: Integer
  field :location, type: String
  field :organization_name, type: String
  field :organization_description, type: String
  field :project_name, type: String
  field :project_blurb, type: String
  field :inspiration_links, type: String
end

