class UsersController < ApplicationController
  protect_from_forgery
  
  def signup
    user = User.create(
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    render json: { auth: user.id }
  end

  def login
    user = User.find_by(email: params[:email])
    render json: { 
      auth: (user && !!user.authenticate(params[:password])) ? user.id : nil
    }
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
