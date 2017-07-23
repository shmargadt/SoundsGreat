class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.

  protect_from_forgery with: :null_session

  def index
    respond_to do |format|
      format.json { render json: { some: 'key logger' } }
    end
  end

  def get_youtube_statistics
    Yt.configuration.api_key = 'AIzaSyCBypKXl1FR6_cMyFoHALh4REO118do6Vk'
    Yt.configuration.client_id = "340164914308-jir62eulreo897bgqda8mq9cuus5bku4.apps.googleusercontent.com"
    # Yt.configuration.client_secret = "1234soundsgreat1234"
    Yt.configuration.log_level = :debug
    account = Yt::Account.new refresh_token: "1/dj-tU2iGGTEx43eYUJGI4MYyq2Axnppsk-hOsAdyZJ13vZqyiSS-GjcgAA97Txmt"
    video = Yt::Video.new id: 'SNiKojVuYBI' , auth: account ## use any public video ID
    puts video
    respond_to do |format|
      format.json { render json: { video_description: "soundsgreat #{video.description}" } }
    end
  end
end
