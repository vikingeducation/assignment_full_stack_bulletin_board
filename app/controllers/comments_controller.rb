class CommentsController < ApplicationController
  def index
    @comments = Comment.all
    respond_to do |format|
      format.json { render json: @comments.to_json, status: 200 }
    end
  end

  def create
    @new_comment = Comment.new(comment_white_list)
    if @new_comment.save
      respond_to do |format|
        format.json { render json: @new_comment.to_json, status: 200 }
      end
    else
      respond_to do |format|
        format.json { render json: { :errors => @new_comment.errors.full_messages }, status: 'error' }
      end
    end
  end

  def update
    @comment = Comment.find_by_id(params[:id])
    if @comment && @comment.update(comment_white_list)
      respond_to do |format|
        format.json { render json: @comment.to_json, status: 200 }
      end
    else
      respond_to do |format|
        format.json { render json: {:errors => @comment.errors.full_messages }, status: 'error' }
      end
    end
  end

  private
    def comment_white_list
      params.require(:comment).permit(:body, :author, :post_id, :id, :score)
    end
end
