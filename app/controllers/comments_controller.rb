class CommentsController < ApplicationController
  def recent
    @comments = Comment.order(created_at: :desc).limit(5)
    respond_to do |format|
      format.json { render json: @comments.to_json }
    end
  end

  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments
    respond_to do |format|
      format.json { render json: @comments }
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

  def vote
    @comment = Comment.find(params[:id])
    @comment.score += params[:value]
    respond_to do |format|
      if @comment.save
        format.json { render json: @comment.to_json }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :author, :score, :post_id)
  end
end
