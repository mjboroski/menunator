class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]

  # GET /items
  def index
    @items = Item.all
    render json: @items, :include => [ :ingredients ]
  end

  # GET /items/1
  def show
    render json: @item, :include => [ :ingredients ]
  end

  # POST /items
  def create
    @item = Item.new(new_item_params)
    if @item.save
      render json: @item, status: :created, location: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /items/1
  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @item.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def new_item_params
      params[:item][:ingredients_attributes] = params[:ingredients_attributes]
      params.require(:item).permit(:name, :category, ingredients_attributes: [:id, :name, :_destroy])
    end

    def item_params
      params.require(:item).permit(:name, :category, :likes, ingredients_attributes: [:id, :name, :_destroy])
    end

end
