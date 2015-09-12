class Admin::PortalController < ApplicationController
  before_filter { redirect_to new_admin_session_path unless admin_signed_in? }

  layout 'admin/portal'

  def index

  end
end
