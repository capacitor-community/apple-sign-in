package com.getcapacitor.community.applesignin

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.webkit.WebView
import com.getcapacitor.community.applesignin.applesignin.R

class LoginActivity : Activity() {
    private var activityResultCode = ActivityResultCode()

    @SuppressLint("SetJavaScriptEnabled")
    public override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val appleAuthenticationURL = intent.getStringExtra("APPLE_OAUTH_URL")
        setContentView(R.layout.bridge_layout_main)
        val webView = findViewById<WebView>(R.id.webview)
        webView.settings.javaScriptEnabled = true
        webView.loadUrl(appleAuthenticationURL)
        webView.addJavascriptInterface(JavaScriptInterface(this, webView), "tokenHandler")
    }

    fun onSuccess(token: String?) {
        println("Login success")
        val intent = Intent()
        intent.putExtra("token", token)
        setResult(activityResultCode.SUCCESS_RESULT, intent)
        finish()
    }

    fun onFailed(error: String?) {
        println("Login failed")
        val intent = Intent()
        intent.putExtra("error", error)
        setResult(activityResultCode.ERROR_RESULT, intent)
        finish()
    }
}