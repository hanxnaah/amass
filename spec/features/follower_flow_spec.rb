feature 'follower flow' do
  scenario 'follower signs up' do
    visit '/'
    expect(page).to have_content('Tell stories that matter')

    within '#following-ctrl' do
      fill_in 'email', with: 'skywalker@ra.net'
      choose 'Other'
      click_button 'KEEP ME POSTED'
      expect(page).to have_content('Thanks for signing up!')
    end

    follower = Follower.last
    expect(follower.email).to eq('skywalker@ra.net')
    expect(follower.type).to eq('other')
  end
end
