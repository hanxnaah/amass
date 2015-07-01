require 'cucumber/rspec/doubles'

When 'I go to an invalid page' do
  visit '/crap'
end

Then 'I get a $status_code status code' do |status_code|
  expect(page.status_code).to eq(status_code.to_i)
end

When 'server blows up' do
  expect_any_instance_of(PagesController).to receive(:index).and_raise
  visit '/'
end

Then 'I see that the page is invalid' do
  expect(page).to have_content("doesn't exist.")
end

Then 'I see the homepage' do
  expect(page).to have_content('Tell stories that matter')
end
