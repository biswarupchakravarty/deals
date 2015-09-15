module Admin::Authentication
  extend ActiveSupport::Concern

  included do
    before_filter { redirect_to new_admin_session_path unless admin_signed_in? }
  end
end