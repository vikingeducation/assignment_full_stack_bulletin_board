class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.json {render json: @posts}
    end
  end

  def show
    @post = Post.find_by_id(params[:id])
    respond_to do |format|
      format.json {render json: @post}
    end
  end

end
