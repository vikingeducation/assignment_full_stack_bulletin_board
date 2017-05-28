class CommentsController < ApplicationController

  def index
    # return last (newest) 3 comments
    @comments = Comment.last(3)

    respond_to do |format|
      format.json { render json: @comments  }
    end
  end

  def create
    @comment = Comment.new( comment_params )

    respond_to do |format|
      if @comment.save
        format.json { render json: @comment }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  private
    def comment_params
      params.require(:comment).permit(:body, :score, :author, :post_id)
    end


end