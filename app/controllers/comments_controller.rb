class CommentsController < ApplicationController
  before_action :set_comment, :except => [:index, :create, :recent]

  def index
    if (params[:post_id] && @post = Post.find(params[:post_id]))
      @comments = @post.comments
    else
      @comments = Comment.order(created_at: :desc).limit(10)
    end
    respond_to do |format|
      format.json { render json: @comments.to_json }
    end
  end

  def create
    @comment = Comment.new(comment_params)
    respond_to do |format|
      if @comment.save
        format.json { render json: @comment }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  def show
    @comment = Comment.find(params[:id])
    respond_to do |format|
      format.json { render json: @comment.to_json }
    end
  end

  def update
    respond_to do |format|
      if @comment.update(comment_params)
        flash.now[:error] = 'Comment updated'
        format.json { render :json => @comment, :status => 200 }
      else
        flash.now[:error] = 'Comment not updated'
        format.json { render :json => comment_errors, :status => 422 }
      end
    end
  end

  private

  def set_comment
    @comment = Comment.find_by_id(params[:id])
    unless @comment
      flash.now[:error] = 'Could not find comment'
      respond_to do |format|
        format.json { render :json => @comment, :status => 422 }
      end
    end
  end

  def comment_params
    params.require(:comment).permit(:text, :author, :score, :post_id)
  end
end
