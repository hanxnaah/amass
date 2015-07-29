class SurveyResponse
  include Mongoid::Document
  include GlobalID::Identification

  field :hear_about_us, type: String

  belongs_to :user, index: true, polymorphic: true
end
