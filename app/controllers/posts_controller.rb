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
    @post = Post.new(post_params)

    if @post.save
      respond_to do |format|
        format.json { render json: @post }
      end
    end
  end


  private
    def post_params
      params.require(:post).permit(:title, :author, :body)
    end
end
