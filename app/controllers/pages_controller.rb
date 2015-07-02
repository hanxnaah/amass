class PagesController < ApplicationController
  def index
    gon.success_stories = t('success_stories')
    gon.team_bios = t('team_bios')
    render layout: false
  end
end
