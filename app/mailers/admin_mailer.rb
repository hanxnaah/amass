class AdminMailer < ApplicationMailer
  include Roadie::Rails::Automatic

  default to: 'admin@amassmedia.org'

  def new_filmmaker(filmmaker)
    @filmmaker = filmmaker
    mail(subject: "[Amass Media] Be a filmmaker: #{filmmaker.name}")
  end

  def new_organization(org)
    @organization = org
    mail(subject: "[Amass Media] Post a project: #{org.organization_name}")
  end
end
