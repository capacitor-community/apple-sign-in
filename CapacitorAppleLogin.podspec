
  Pod::Spec.new do |s|
    s.name = 'CapacitorAppleLogin'
    s.version = '0.0.1'
    s.summary = 'Capacitor Apple Login'
    s.license = 'MIT'
    s.homepage = 'https://github.com/htorbov/capacitor-apple-login'
    s.author = 'Hristo Torbov'
    s.source = { :git => 'https://github.com/htorbov/capacitor-apple-login', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end