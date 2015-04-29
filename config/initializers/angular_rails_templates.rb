module CustomHamlEngine
  class HamlTemplate < Tilt::HamlTemplate
    def initialize(file = nil, line = 1, options = {}, &block)
      options[:remove_whitespace] ||= true
      super(file, line, options, &block)
    end

    def evaluate(scope, locals, &block)
      scope.class_eval do
        include Rails.application.routes.url_helpers
        include Rails.application.routes.mounted_helpers
        include ActionView::Helpers
      end

      super.gsub(/\n/, '')
    end
  end
end

Tilt.register CustomHamlEngine::HamlTemplate, '.haml'
