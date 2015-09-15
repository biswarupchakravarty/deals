class Admin::StoresController < ActionController::Base
  include Admin::Layout
  include Admin::Authentication

  def new
    @store = Store.new
  end

  def create
    @store = Store.new params.require(:store).permit(:name, :address, :lat, :lng)
    render action: :new and return unless @store.save
    redirect_to admin_stores_path
  end

  def index
    @stores = Store.all
  end
end
