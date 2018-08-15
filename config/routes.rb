Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :ingredients
  resources :items
  # scope '/api' do
  #   get :menu, to: 'menu#index'
  # end
  root 'items#index'
end
