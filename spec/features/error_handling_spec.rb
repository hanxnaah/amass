feature 'error handling flow' do
  scenario 'user goes to bad page' do
    visit '/crap'
    expect(page).to have_content("doesn't exist.")
  end

  it 'returns a 404 when user goes to bad page' do
    Capybara.current_driver = :rack_test
    visit '/crap'
    expect(page.status_code).to eq(404)
  end
end
