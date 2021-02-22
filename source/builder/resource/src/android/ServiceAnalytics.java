package com.cocos.service;

import android.content.Context;
import com.cocos.analytics.CAAgent;

public class ServiceAnalytics implements SDKWrapper.SDKInterface {

    public static void initAnalytics(String appID, String storeID, String engine, String callNumber) {
        CAAgent.init(SDKWrapper.shared().getActivity(), appID, storeID, engine, callNumber);
    }

    @Override
    public void init(Context context) { CAAgent.enableDebug(false); }
    @Override
    public void onResume(){  CAAgent.onResume(SDKWrapper.shared().getActivity()); }
    @Override
    public void onPause(){  CAAgent.onPause(SDKWrapper.shared().getActivity()); }
    @Override
    public void onDestroy(){ CAAgent.onDestroy(); }
}
