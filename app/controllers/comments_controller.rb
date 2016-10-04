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
    else
      respond_to do |format|
        format.json {}
      end
    end
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      respond_to do |format|
        format.json { render json: @comment }
      end
    else
      respond_to do |format|
        format.json {}
      end
    end

  end

  private

  def comment_params
    params.require(:comment).permit(:votes, :author, :content, :post_id)
  end

end
