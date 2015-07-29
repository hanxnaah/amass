class Filmmaker
  include Mongoid::Document
  include GlobalID::Identification

  field :name, type: String
  field :email, type: String
  field :skills, type: String
  field :city, type: String
  field :portfolio_url, type: String

  has_one :survey_response, as: :user
end
