feature 'filmmaker flow' do
  scenario 'filmmaker signs up' do
    visit '/'
    expect(page).to have_content('Tell stories that matter')

    within '.top-bar' do
      click_link 'Be a Filmmaker'
    end
    expect(page).to have_content('Join our filmmaker network!')

    fill_in 'name', with: 'Scooby Doo'
    fill_in 'email', with: 'scooby@sd.org'
    fill_in 'skills', with: 'Eating Scooby Snacks'

    click_button 'SUBMIT'
    expect(page).to have_content('Thanks for signing up!')

    filmmaker = Filmmaker.last
    expect(filmmaker.name).to eq('Scooby Doo')
    expect(filmmaker.email).to eq('scooby@sd.org')
    expect(filmmaker.skills).to eq('Eating Scooby Snacks')

    expect(ActionMailer::Base.deliveries.length).to be 1
    mail = ActionMailer::Base.deliveries.last
    expect(mail.to).to eq(['admin@amassmedia.org'])
    expect(mail.subject).to include('Be a filmmaker: Scooby Doo')
  end
end
