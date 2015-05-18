feature 'follower flow' do
  scenario 'follower signs up' do
    visit '/'
    expect(page).to have_content('Tell stories that matter')

    within '[ng-controller=FollowCtrl]' do
      fill_in 'email', with: 'skywalker@ra.net'
      choose 'Other'

      change_follower_count = change(Follower, :count).by(1)
      change_mail_count = change(ActionMailer::Base.deliveries, :length).by(1)
      expect do
        click_button 'KEEP ME POSTED'
        expect(page).to have_content('Thanks for signing up!')
      end.to change_follower_count.and change_mail_count
    end

    follower = Follower.last
    expect(follower.email).to eq('skywalker@ra.net')
    expect(follower.type).to eq('other')

    mail = ActionMailer::Base.deliveries.last
    expect(mail.to).to eq(['admin@amassmedia.org'])
    expect(mail.subject).to include('New follower: skywalker@ra.net')
  end
end
