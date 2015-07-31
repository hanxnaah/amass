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

  def new_follower(follower)
    @follower = follower
    mail(subject: "[Amass Media] New follower: #{follower.email}")
  end

  def new_survey_response(survey_response)
    @survey_response = survey_response
    subject = "[Amass Media] Referral from: #{survey_response.hear_about_us}"
    mail(subject: subject)
  end
end
