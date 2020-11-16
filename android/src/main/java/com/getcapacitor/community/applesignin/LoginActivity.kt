package com.getcapacitor.community.applesignin

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.view.KeyEvent
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
        webView.addJavascriptInterface(JavaScriptInterface(this, webView), "responseHandler")
    }

    private fun setResult(data: String?, code: Int) {
        val intent = Intent()
        when (code) {
            activityResultCode.SUCCESS_RESULT -> {
                intent.putExtra("token", data)
            }
            else -> {
                intent.putExtra("error", data)
            }
        }
        intent.putExtra("code", code)
        setResult(code, intent)
        finish()
    }

    fun onSuccess(result: String?) {
        println("Login success")
        this.setResult(result, activityResultCode.SUCCESS_RESULT)
    }

    fun onFailed(error: String?) {
        println("Login failed")
        this.setResult(error, activityResultCode.ERROR_RESULT)
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            this.setResult("user canceled", activityResultCode.USER_CANCELED)
        }
        return super.onKeyDown(keyCode, event)
    }
}
