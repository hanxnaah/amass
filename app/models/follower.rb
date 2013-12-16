class Follower
  include Mongoid::Document

  field :email, type: String
  field :type, type: String
end
