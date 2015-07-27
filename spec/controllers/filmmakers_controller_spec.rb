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

    it 'returns a JSON' do
      post(:create, filmmaker: filmmaker_params)

      json = JSON.parse(response.body)
      expect(json['_id']).to eq(Filmmaker.last.id.to_s)
    end
  end
end
