package com.getcapacitor.community.applesignin

import android.webkit.JavascriptInterface
import android.webkit.WebView

open class JavaScriptInterface(private var loginActivity: LoginActivity, protected var webView: WebView) {
    @JavascriptInterface
    fun setToken(token: String?) {
        loginActivity.onSuccess(token)
    }

}