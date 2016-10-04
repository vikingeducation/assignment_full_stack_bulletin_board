class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:comment][:post_id])
    @comment = @post.comments.build(comment_params)
    respond_to do |format|
      if @comment.save
        format.html { render :index }
        format.json { render json: @comment }
      else
        format.json { render json: {error: @comment.errors.full_messages.join(', ')} }
        format.html { render :index }
      end
    end
  end

  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments.all
    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def all
    @comments = Comment.all
    respond_to do |format|
      format.json { render json: @comments }
    end
  end

  def update
    @comment = Comment.find(params[:id]);
    @comment.update(comment_params);
  end

  private
  def comment_params
    params.require(:comment).permit(:voteCount, :body, :author, :date, :id, :post_id, :created_at, :updated_at)
  end

end
