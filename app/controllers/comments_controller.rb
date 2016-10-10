class CommentsController < ApplicationController

  def recent 
    @comments = Comment.order(created_at: "desc").limit(10)

    respond_to do |format|
      format.json { render json: @comments }
    end
  end


  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments
    respond_to do |format|
      format.json { render json: @comments }
    end

  end
end
