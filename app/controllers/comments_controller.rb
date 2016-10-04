class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def show
  end

end
