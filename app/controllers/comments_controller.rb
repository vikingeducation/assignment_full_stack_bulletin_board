class CommentsController < ApplicationController
  def index
    @comments = Comment.all.order(:created_at => :desc)

    respond_to do |format|
      format.json { render :json => @comments }
    end
  end

  def create
    @comment = Comment.new(whitelisted_params)

    if @comment.save
      respond_to do |format|
        format.json { render :json => @comment }
      end
    else
      respond_to do |format|
        format.json { render :status => :unprocessable_entity }
      end
    end
  end

  def update
    @comment = Comment.find(params[:id])
    
    if @comment.update(whitelisted_params)
      respond_to do |format|
        format.json { render :json => @comment }
      end
    else
      respond_to do |format|
        format.json { render :status => :unprocessable_entity }
      end
    end
  end

  private

  def whitelisted_params
    params.require(:comment).permit(:author, :body, :post_id, :score)
  end
end
