class CommentsController < ApplicationController
  def index
    @comments = Comment.all.order(:created_at => :desc).limit(3)

    respond_to do |format|
      format.json { render :json => @comments }
    end
  end
end
