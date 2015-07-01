When 'I sign up as a follower' do
  visit '/'
  expect(page).to have_content('Tell stories that matter')

  @email = 'skywalker@ra.net'
  within '[ng-controller=FollowCtrl]' do
    fill_in :email, with: 'skywalker@ra.net'
    choose 'Other'

    expect do
      click_button 'KEEP ME POSTED'
      expect(page).to have_content('Thanks for signing up!')
    end.to change(Follower, :count).by(1)
      .and change(ActionMailer::Base.deliveries, :length).by(1)
  end

  follower = Follower.last
  expect(follower.email).to eq('skywalker@ra.net')
  expect(follower.type).to eq('other')
end

Then 'a follower admin notification is sent' do
  step "an admin notification is sent titled 'New follower: #{@email}'"
end
