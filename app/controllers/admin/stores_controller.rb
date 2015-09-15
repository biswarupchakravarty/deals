class Admin::StoresController < ActionController::Base
  include Admin::Layout
  include Admin::Authentication

  def index
    @stores = Store.all
  end

  def new
    @store = Store.new
  end

  def create
    @store = Store.new params.require(:store).permit(:name, :address, :lat, :lng)
    render action: :new and return unless @store.save
    redirect_to edit_admin_store_path @store
  end

  def edit
    @store = Store.find params[:id]
  end

  def update
    @store = Store.find params[:id]
    @store.update_attributes params.require(:store).permit(:name, :address, :lat, :lng)
    render action: :edit and return unless @store.valid?
    redirect_to admin_stores_path
  end

  def add_inventory
    @store = Store.find params[:id]
    @store.add_inventory! inventory_details
    render json: { err: false }
  end

  private

  def inventory_details
    params.require(:inventory).permit(root_category: :name, super_category: :name, category: :name, sub_category: :name)
  end
end
