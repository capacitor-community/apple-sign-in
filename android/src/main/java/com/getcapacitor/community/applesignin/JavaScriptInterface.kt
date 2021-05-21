package com.getcapacitor.community.applesignin

import android.webkit.JavascriptInterface
import android.webkit.WebView

open class JavaScriptInterface(private var loginActivity: LoginActivity, protected var webView: WebView) {
    @JavascriptInterface
    fun setResult(result: String?) {
        loginActivity.onSuccess(result)
    }

    @JavascriptInterface
    fun onError(error: String?) {
        loginActivity.onFailed(error)
    }
}
