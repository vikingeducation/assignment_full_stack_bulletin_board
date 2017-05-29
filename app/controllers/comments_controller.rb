class CommentsController < ApplicationController

  def index
    # return last (newest) 3 comments
    @comments = Comment.last(3)

    respond_to do |format|
      format.json { render json: @comments  }
    end
  end

  def show
    @comment = Comment.find(params[:id])

    respond_to do |format|
      format.json { render json: @comment }
    end
  end

  def update
    @comment = Comment.find(params[:id])

    respond_to do |format|
      if @comment.update( comment_params )
        format.json { render json: @comment }
      else
        format.json { render status: :unprocessable_entity }
      end
    end
  end

  def create
    @comment = Comment.new( comment_params )

    respond_to do |format|
      if @comment.save
        format.json { render json: @comment }
      else
        format.json { render status: :unprocessable_entity }
      end
    end

  end

  private
    def comment_params
      params.require(:comment).permit(:body, :score, :author, :post_id)
    end


end