class SurveyResponsesController < ApplicationController
  def create
    survey_response = SurveyResponse.new(survey_response_params)

    status =
      if survey_response.save
        201
      else
        400
      end

    render json: survey_response, status: status
  end

  private

  def user_id
    params[:survey_response][:user_id]
  end

  def user
    Filmmaker.find_by(id: user_id)
  rescue Mongoid::Errors::DocumentNotFound
    Organization.find_by(id: user_id)
  end

  def survey_response_params
    params.require(:survey_response).permit(:hear_about_us).merge(user: user)
  end
end
