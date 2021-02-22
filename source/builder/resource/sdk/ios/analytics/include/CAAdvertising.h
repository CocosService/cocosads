#import <Foundation/Foundation.h>

@interface CAAdvertising : NSObject

+ (void)begin:(NSString*)_id;
+ (void)complete:(NSString*)_id timeLong:(NSString*)timeLong profit:(NSString*)profit;
+ (void)failed:(NSString*)_id reason:(NSString*)reason;

@end
