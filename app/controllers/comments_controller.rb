class CommentsController < ApplicationController

  def index 
    @comments = Comment.order(created_at: "desc").limit(10)

    respond_to do |format|
      format.json { render json: @comments }
    end
  end
end
