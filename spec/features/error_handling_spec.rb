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

  it 'server blows up' do
    expect_any_instance_of(PagesController).to receive(:index).and_raise
    visit '/'
    expect(page).to have_content('Tell stories that matter')
  end

  it 'returns a 500 when server blows up' do
    Capybara.current_driver = :rack_test
    expect_any_instance_of(PagesController).to receive(:index).and_raise
    visit '/'
    expect(page.status_code).to eq(500)
  end
end
