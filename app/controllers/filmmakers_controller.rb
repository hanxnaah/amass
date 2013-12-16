class FilmmakersController < ApplicationController

  def create
    filmmaker = Filmmaker.new(filmmaker_params)
    status = filmmaker.save ? 201 : 400
    render json: filmmaker, status: status
  end

  private

  def filmmaker_params
    params.permit(:name, :email, :skills, :portfolio_url)
  end
end

