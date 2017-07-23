Rails.application.routes.draw do
  get '/api' => 'application#index', defaults: { format: :json }
  get '/youtube_statistics' => 'application#get_youtube_statistics', defaults: { format: :json }
end
