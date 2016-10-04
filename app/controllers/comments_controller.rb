class CommentsController < ApplicationController

  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments.all
    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def all
    @comments = Comment.all
    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def update
    @comment = Comment.find(params[:id]);
    @comment.update(comment_params);
  end

  private
  def comment_params
    params.require(:comment).permit(:voteCount, :body, :author, :date, :id, :post_id, :created_at, :updated_at)
  end

end
