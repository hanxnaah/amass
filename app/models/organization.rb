class Organization
  include Mongoid::Document

  field :budget, type: Integer
  field :contact_email, type: String
  field :contact_name, type: String
  field :deadline, type: String
  field :description, type: String
  field :extra_resources, type: String
  field :length, type: Integer
  field :location, type: String
  field :organization_name, type: String
  field :project_name, type: String
end

