feature 'organization flow' do
  scenario 'organization posts a project' do
    visit '/'
    expect(page).to have_content('Tell stories that matter')

    within '.top-bar' do
      click_link 'POST A PROJECT'
    end
    expect(page).to have_content('Make a free project posting')

    fill_in 'organization-name', with: 'Washington Capitals'
    fill_in 'contact-name', with: 'Alex'
    fill_in 'contact-email', with: 'ovie@capitals.com'
    fill_in 'description', with: 'We play hockey but lose in the playoffs :('
    fill_in 'payment', with: '888'

    click_button 'SUBMIT'
    expect(page).to have_content('Thanks for signing up!')

    org = Organization.last
    expect(org.payment).to eq(888)
    expect(org.contact_email).to eq('ovie@capitals.com')
    expect(org.organization_name).to eq('Washington Capitals')
    expect(org.contact_name).to eq('Alex')
    expect(org.description).to eq('We play hockey but lose in the playoffs :(')
  end
end
