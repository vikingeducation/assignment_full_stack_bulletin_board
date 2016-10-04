class PostsController < ApplicationController

  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts.to_json }
    end
  end

  def show
    @post = Post.find_by_id(params[:id])
    respond_to do |format|
      format.json { render json: @post.to_json(:include => :comments) }
    end
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      respond_to do |format|
        format.json { render json: @post.to_json }
      end
    end
  end

  private

    def post_params
      params.require(:post).permit(
        :author,
        :title,
        :body
      )
    end

end
