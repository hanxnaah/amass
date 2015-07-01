When 'I sign up as a filmmaker named $name' do |name|
  visit '/'
  expect(page).to have_content('Tell stories that matter')

  within '.top-bar' do
    click_link 'Be a Filmmaker'
  end
  expect(page).to have_content('Join our filmmaker network!')

  fill_in 'name', with: name
  fill_in 'email', with: 'scooby@sd.org'
  fill_in 'skills', with: 'Eating Scooby Snacks'

  change_filmmaker_count = change(Filmmaker, :count).by(1)
  change_mail_count = change(ActionMailer::Base.deliveries, :length).by(1)
  expect do
    click_button 'SUBMIT'
    expect(page).to have_content('Thanks for signing up!')
  end.to change_filmmaker_count.and change_mail_count

  filmmaker = Filmmaker.last
  expect(filmmaker.name).to eq(name)
  expect(filmmaker.email).to eq('scooby@sd.org')
  expect(filmmaker.skills).to eq('Eating Scooby Snacks')
end
