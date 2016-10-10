class CommentsController < ApplicationController

  def recent 
    @comments = Comment.order(created_at: "desc").limit(10)

    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def create
    @comment = Comment.new(comment_params)

    @comment.save

    respond_to do |format|
      format.json { render json: @comment }

    end

  end


  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments
    respond_to do |format|
      format.json { render json: @comments }
    end

  end


  private

  def comment_params
    params.require(:comment).permit(:author, :content, :post_id)
  end
end
