class CommentsController < ApplicationController

  def index
    @comments = Comment.all

    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      respond_to do |format|
        format.json { render json: @comment }
      end
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:author, :body, :post_id)
    end
end
