package com.getcapacitor.community.applesignin

import android.content.Intent
import com.getcapacitor.*
import java.io.UnsupportedEncodingException
import java.net.URLEncoder
import kotlin.jvm.Throws

@NativePlugin(
        requestCodes = [SignInWithApple.requestCode]
)
class SignInWithApple : Plugin() {
    private var baseAuthURL = "https://appleid.apple.com/auth/authorize"
    private var activityResultCode = ActivityResultCode()
    companion object {
        const val requestCode = 1001
    }

    @PluginMethod
    @Throws(UnsupportedEncodingException::class)
    fun AuthorizeAndroid(call: PluginCall) {
        saveCall(call)
        val clientId = call.getString("clientId")
        val redirectURI = call.getString("redirectURI")
        val responseType = call.getString("responseType")
        val scope = call.getString("scope")
        val responseMode = call.getString("responseMode")
        val queryParams = String.format(
                "?client_id=%s&redirect_uri=%s&response_type=%s&scope=%s&response_mode=%s",
                clientId,
                URLEncoder.encode(redirectURI, "UTF-8"),
                responseType,
                scope,
                responseMode
        )
        val appleAuthURL = baseAuthURL + queryParams
        val intent = Intent(context, LoginActivity::class.java)
        intent.putExtra("APPLE_OAUTH_URL", appleAuthURL)
        intent.putExtra("REDIRECT_URI", redirectURI)
        startActivityForResult(call, intent, requestCode)
    }

    override fun handleOnActivityResult(
            requestCode: Int,
            resultCode: Int,
            data: Intent
    ) {
        super.handleOnActivityResult(requestCode, resultCode, data)
        if (requestCode == SignInWithApple.requestCode) {
            val savedCall = savedCall ?: return
            when (resultCode) {
                activityResultCode.SUCCESS_RESULT -> {
                    val token = data.getStringExtra("token")
                    val ret = JSObject()
                    ret.put("value", token)
                    savedCall.success(ret)
                }
                activityResultCode.ERROR_RESULT, activityResultCode.USER_CANCELED -> {
                    val errorMessage = data.getStringExtra("error")
                    val errorCode = data.getStringExtra("code")
                    savedCall.reject(errorMessage, errorCode)
                }
            }
        }
    }
}
