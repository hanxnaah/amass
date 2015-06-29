describe FilmmakersController do
  let(:filmmaker_params) { { city: 'Silver Spring' } }

  describe '#create' do
    it 'creates a filmmaker' do
      expect do
        post(:create, filmmaker: filmmaker_params)
      end.to change(Filmmaker, :count).by(1)
    end

    it 'sets params on new filmmaker' do
      post(:create, filmmaker: filmmaker_params)
      filmmaker = Filmmaker.last
      expect(filmmaker.city).to eq('Silver Spring')
    end
  end
end
