module Admin::PortalHelper
  def menu_active name
    return "active" if "#{params[:controller]}##{params[:action]}" == name
    return "active" if params[:controller] == name
  end
end
