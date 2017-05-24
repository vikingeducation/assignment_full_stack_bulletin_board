class PostsController < ApplicationController

  def index

    @posts = Post.all

    respond_to do |format|
      format.json { render json: @posts.to_json, status: 200 }
    end
  end

  def create
    post = Post.new(post_params)
    if post.save
      render json: post
    else
      render json: post.errors.full_messages
    end
  end

  private

  def post_params
   params.require(:post).permit(:body, :author)
  end

end
