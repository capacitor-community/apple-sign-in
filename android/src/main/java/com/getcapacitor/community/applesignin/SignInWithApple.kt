package com.getcapacitor.community.applesignin

import android.content.Intent
import com.getcapacitor.*
import java.io.UnsupportedEncodingException
import java.net.URLEncoder

@NativePlugin
class SignInWithApple : Plugin() {
    private var baseAuthURL = "https://appleid.apple.com/auth/authorize"

    @PluginMethod
    @Throws(UnsupportedEncodingException::class)
    fun AuthorizeAndroid(call: PluginCall) {
        saveCall(call)
        val clientId = call.getString("clientId")
        val redirectURI = call.getString("redirectURI")
        val queryParams = String.format(
                "?client_id=%s&redirect_uri=%s&response_type=code id_token&scope=email&response_mode=form_post",
                clientId,
                URLEncoder.encode(redirectURI, "UTF-8")
        )
        val appleAuthURL = baseAuthURL + queryParams
        val intent = Intent(context, LoginActivity::class.java)
        intent.putExtra("APPLE_OAUTH_URL", appleAuthURL)
        intent.putExtra("REDIRECT_URI", redirectURI)
        startActivityForResult(call, intent, 0)
    }

    override fun handleOnActivityResult(
            requestCode: Int,
            resultCode: Int,
            data: Intent
    ) {
        super.handleOnActivityResult(requestCode, resultCode, data)
        val token = data.getStringExtra("token")
        val savedCall = savedCall ?: return
        val ret = JSObject()
        ret.put("value", token)
        savedCall.success(ret)
    }
}