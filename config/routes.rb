Rails.application.routes.draw do
  scope '/api' do
    get :menu, to: 'menu#index'
  end
end
