module Admin::PortalHelper
  def menu_active name
    "active" if "#{params[:controller]}##{params[:action]}" == name
  end
end
