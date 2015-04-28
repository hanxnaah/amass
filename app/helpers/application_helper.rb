module ApplicationHelper
  def read_asset_manifest
    File.read(Dir.glob('public/assets/manifest-*.json').last).html_safe
  rescue
    {}
  end
end
