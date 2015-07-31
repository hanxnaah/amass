When 'I fill out a survey response' do
  @name = 'Natalie Portman'
  fill_in 'hear_about_us', with: @name
  click_button 'HELP US OUT!'
  expect(page).to have_content('Thanks!')
end

Then 'a survey response admin notification is sent' do
  step "an admin notification is sent titled 'Referred from: #{@name}'"
end
