class FollowersController < ApplicationController
  def create
    follower = Follower.new(follower_params)
    status =
      if follower.save
        AdminMailer.new_follower(follower).deliver_later
        201
      else
        400
      end

    render json: follower, status: status
  end

  def follower_params
    params.permit(:email, :type)
  end
end
