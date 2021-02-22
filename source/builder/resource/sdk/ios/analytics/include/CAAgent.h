#import <Foundation/Foundation.h>

@interface CAAgent : NSObject

+ (void)init:(NSString*)appID storeID:(NSString*)storeID engine:(NSString*)engine;
+ (void)init:(NSString*)appID storeID:(NSString*)storeID engine:(NSString*)engine callNumber:(NSString*)callNumber;
+ (void)onResume;
+ (void)onPause;
+ (void)onDestroy;
+ (void)enableDebug:(BOOL)enable;
+ (BOOL)isInited;

@end
