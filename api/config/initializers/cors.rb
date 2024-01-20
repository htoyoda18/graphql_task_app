Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*' # 本番環境ではより安全な設定に変更することが望ましい
    resource '*',
             headers: :any,
             methods: %i[get post options]
  end
end
