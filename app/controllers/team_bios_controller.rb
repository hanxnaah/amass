class TeamBiosController < ApplicationController
  def show
    team_bios = t('team_bios')
    unless team_bios.any? { |story| story[:slug] == params[:id] }
      not_found
      return
    end
    render template: 'pages/index', layout: false
  end
end
