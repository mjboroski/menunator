Rails.application.routes.draw do
  resources :ingredients
  resources :items
  scope '/api' do
    get :menu, to: 'menu#index'
  end
end
