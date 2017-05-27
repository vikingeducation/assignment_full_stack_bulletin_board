class CommentsController < ApplicationController

  def index
    # return last (newest) 3 comments
    @comments = Comment.last(3)

    respond_to do |format|
      format.json { render json: @comments  }
    end
  end

end