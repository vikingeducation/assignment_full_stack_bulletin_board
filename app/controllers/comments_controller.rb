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



end
