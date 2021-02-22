//
//  Analytics.m
//  polish_project-mobile
//
//  Created by 杨欣 on 2018/10/22.
//

#import "ServiceAnalytics.h"

#import "CAAgent.h"

@implementation ServiceAnalytics

- (void)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [CAAgent enableDebug:NO];
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    if (CAAgent.isInited) {
        [CAAgent onPause];
    }
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    if (CAAgent.isInited) {
        [CAAgent onResume];
    }
}

- (void)applicationWillTerminate:(UIApplication *)application {
    if (CAAgent.isInited) {
        [CAAgent onDestroy];
    }
}

@end
