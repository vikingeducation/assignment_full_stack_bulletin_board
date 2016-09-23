class PostsController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.json { render :json => @posts.to_json(:include => :comments) }
    end
  end

  def create
    @post = Post.new(whitelisted_params)

    if @post.save
      respond_to do |format|
        format.json { render :json => @post }
      end
    else
      respond_to do |format|
        format.json { render :status => :unprocessable_entity }
      end
    end
  end


  private

  def whitelisted_params
    params.require(:post).permit(:title, :author, :body)
  end
end


