class Filmmaker
  include Mongoid::Document

  field :name, type: String
  field :email, type: String
  field :skills, type: String
  field :city, type: String
  field :portfolio_url, type: String
end
