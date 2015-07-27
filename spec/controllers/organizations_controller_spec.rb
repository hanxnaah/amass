describe OrganizationsController do
  let(:organization_params) { { contact_name: 'Bob' } }

  describe '#create' do
    it 'renders a 201' do
      post(:create, organization: organization_params)
      expect(response.status).to eq 201
    end

    it 'returns a JSON' do
      post(:create, organization: organization_params)

      json = JSON.parse(response.body)
      expect(json['_id']['$oid']).to eq(Organization.last.id.to_s)
    end
  end
end
