class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts.to_json(:include => :comments) }
    end
  end

  def create
    @post = Post.new(post_params)
    respond_to do |format|
      if @post.save
        format.json { render json: @post }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  def show
  end


  private

  def post_params
    params.require(:post).permit(:title, :user, :body)
  end

end
