class SuccessStoriesController < ApplicationController
  def show
    success_stories = t('success_stories')
    unless success_stories.any? { |story| story[:slug] == params[:id] }
      not_found
      return
    end
    render template: 'pages/index', layout: false
  end
end
