When /^I sign up as a follower with (.+)$/ do |email|
  visit '/'
  expect(page).to have_content('Tell stories that matter')

  within '[ng-controller=FollowCtrl]' do
    fill_in :email, with: email
    choose 'Other'

    click_button 'KEEP ME POSTED'
    expect(page).to have_content('Thanks for signing up!')
  end
end

Then /^a notification is sent to admins titled '(.+)'$/ do |title|
  mail = ActionMailer::Base.deliveries.last
  expect(mail.to).to eq(['admin@amassmedia.org'])
  expect(mail.subject).to include(title)
end

Then /^a follower is created for (.+)$/ do |email|
  follower = Follower.last
  expect(follower.email).to eq(email)
  expect(follower.type).to eq('other')
end
