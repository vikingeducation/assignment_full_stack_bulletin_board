class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts }
    end
  end

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.json { render json: @post }
    end
  end

  def create
    @post = Post.new(postParams)
    @post.save
  end

private
  def postParams
    params.require(:post).permit(:author, :title, :date, :body)
  end
end
