feature 'organization flow' do
  scenario 'organization posts a project' do
    visit '/'
    expect(page).to have_content 'Tell stories that matter'
  end
end
