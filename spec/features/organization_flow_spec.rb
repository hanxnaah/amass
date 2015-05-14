feature 'organization flow' do
  scenario 'organization posts a project' do
    visit '/'
    expect(page).to have_content('Tell stories that matter')

    within '.top-bar' do
      click_link 'Post a Project'
    end
    expect(page).to have_content('Make a free project posting')

    fill_in 'organization_name', with: 'Washington Capitals'
    fill_in 'contact_name', with: 'Alex'
    fill_in 'contact_email', with: 'ovie@capitals.com'
    fill_in 'description', with: 'We play hockey but lose in the playoffs :('
    fill_in 'payment', with: '888.8'

    change_organization_count = change(Organization, :count).by(1)
    change_mail_count = change(ActionMailer::Base.deliveries, :length).by(1)
    expect do
      click_button 'SUBMIT'
      expect(page).to have_content('Thanks for signing up!')
    end.to change_organization_count.and change_mail_count

    org = Organization.last
    expect(org.payment).to eq(888.80)
    expect(org.contact_email).to eq('ovie@capitals.com')
    expect(org.organization_name).to eq('Washington Capitals')
    expect(org.contact_name).to eq('Alex')
    expect(org.description).to eq('We play hockey but lose in the playoffs :(')

    mail = ActionMailer::Base.deliveries.last
    expect(mail.to).to eq(['admin@amassmedia.org'])
    expect(mail.subject).to include('Post a project: Washington Capitals')
  end
end
