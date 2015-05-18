class Follower
  include Mongoid::Document
  include GlobalID::Identification

  field :email, type: String
  field :type, type: String
end
