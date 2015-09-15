module Admin::Layout
  extend ActiveSupport::Concern

  included do
    layout 'admin/portal'
  end
end