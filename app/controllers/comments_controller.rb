class CommentsController < ApplicationController

  def index
    @comments = Comment.all

    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def show
    @comment = Comment.find(params[:id])

    respond_to do |format|
      format.json { render json: @comment }
    end
  end

  def update
    @comment = Comment.find(params[:id])

    if @comment.update_attributes(comment_params)
      respond_to do |format|
        format.json { render json: @comment }
      end
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
      params.require(:comment).permit(:id, :author, :body, :post_id, :rating, :created_at, :updated_at)
    end
end
