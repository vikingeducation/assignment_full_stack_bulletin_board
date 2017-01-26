class CommentsController < ApplicationController
  def index
    @comments = Comment.order(created_at: :desc).limit(5)
    respond_to do |format|
      format.json { render json: @comments.to_json }
    end
  end

  def upvote
    @comment = Comment.find(params[:id])
    @comment.score += 1;
    respond_to do |format|
      if @comment.update(comment_params)
        format.json { render json: @post.to_json }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  def downvote
    @comment = Comment.find(params[:id])
    @comment.score -= 1;
    @comment.score = 0 if @comment < 0
    respond_to do |format|
      if @comment.update(comment_params)
        format.json { render json: @post.to_json }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:score)
  end
end
