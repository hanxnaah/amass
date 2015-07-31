When 'I sign up as an organization' do
  visit '/'
  expect(page).to have_content('Tell stories that matter')

  within '.top-bar' do
    click_link 'Post a Project'
  end
  expect(page).to have_content('Make a project posting')

  @name = 'Washington Capitals'
  fill_in 'organization_name', with: 'Washington Capitals'
  fill_in 'contact_name', with: 'Alex'
  fill_in 'contact_email', with: 'ovie@capitals.com'
  fill_in 'description', with: 'We play hockey but lose in the playoffs :('
  fill_in 'payment', with: '888.8'

  change_organization_count = change(Organization, :count).by(1)
  change_mail_count = change(ActionMailer::Base.deliveries, :length).by(1)
  expect do
    click_button 'POST MY PROJECT!'
    expect(page).to have_content("You're project has been posted!")
  end.to change_organization_count.and change_mail_count

  org = Organization.last
  expect(org.payment).to eq(888.80)
  expect(org.contact_email).to eq('ovie@capitals.com')
  expect(org.organization_name).to eq('Washington Capitals')
  expect(org.contact_name).to eq('Alex')
  expect(org.description).to eq('We play hockey but lose in the playoffs :(')
end

Then 'an organization admin notification is sent' do
  step "an admin notification is sent titled 'Post a project: #{@name}'"
end

Then 'an organization survey response admin notification is sent' do
  step 'a survey response admin notification is sent'
end
