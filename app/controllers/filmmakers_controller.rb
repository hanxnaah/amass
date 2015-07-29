class FilmmakersController < ApplicationController
  def create
    filmmaker = Filmmaker.new(filmmaker_params)
    status =
      if filmmaker.save
        AdminMailer.new_filmmaker(filmmaker).deliver_later
        201
      else
        400
      end

    render json: filmmaker, status: status
  end

  def update
    filmmaker = Filmmaker.find(params[:id])

    status =
      if filmmaker.update(filmmaker_params)
        201
      else
        400
      end

    render json: filmmaker, status: status
  end

  private

  def filmmaker_params
    params.require(:filmmaker).permit(
      :name, :email, :skills, :portfolio_url, :city
    )
  end
end
