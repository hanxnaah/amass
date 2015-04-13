class PagesController < ApplicationController
  def index
    gon.success_stories = t('success_stories')
    render layout: false
  end
end
