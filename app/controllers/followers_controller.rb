class FollowersController < ApplicationController

  def create
    follower = Follower.new(follower_params)
    status = follower.save ? 201 : 400
    render json: follower, status: status
  end

  def follower_params
    params.permit(:email, :type)
  end
end
