class VideographersController < ApplicationController

  def create
    videographer = Videographer.new(videographer_params)
    status = videographer.save ? 201 : 400
    render json: videographer, status: status
  end

  private

  def videographer_params
    params.permit(:name, :email, :skills, :portfolio_url)
  end
end

