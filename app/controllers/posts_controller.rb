class PostsController < ApplicationController

  def index

    @posts = Post.all

    respond_to do |format|
      format.json { render json: @posts.to_json(include: :comments), status: 200 }
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save 
      respond_to do |format|
        format.json { render json: @post.to_json, status: 200 }
      end
    else
      respond_to do |format|
        format.json {puts "You messed up"}
      end
    end
  end


  private

  def post_params
    params.require(:post).permit(:author, :body, :title)
  end

end
