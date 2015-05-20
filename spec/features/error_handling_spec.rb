feature 'error handling flow' do
  scenario 'user goes to bad page' do
    visit '/crap'
    expect(page).to have_content("doesn't exist.")
  end
end
