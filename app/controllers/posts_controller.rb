class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.json { render json: @posts.to_json, status: 200 }
    end
  end

  def create
    @new_post = Post.new(post_white_list)
    if @new_post.save
      respond_to do |format|
        format.json { render json: @new_post.to_json, status: 200 }
      end
    else
      respond_to do |format|
        format.json { render json: { :errors => @new_post.errors.full_messages }, status: 'error' }
      end
    end
  end

  def show
    @post = Post.find_by_id(params[:id])
    if @post
      respond_to do |format|
        format.json { render json: @post.to_json(:include => :comments), status: 200 }
      end
    else
      respond_to do |format|
        format.json { render json: { :errors => @post.errors.full_messages }, status: 'error' }
      end
    end
  end


  private
    def post_white_list
      params.require(:post).permit(:title, :body, :author)
    end
end
