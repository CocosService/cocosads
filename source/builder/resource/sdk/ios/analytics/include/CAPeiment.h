#import <Foundation/Foundation.h>
#import "CAPayment.h"

@interface CAPeiment : CAPayment
+ (void)peiBegin:(int)amount orderID:(NSString*)orderID peiType:(NSString*)peiType pppID:(NSString*)pppID currencyType:(NSString*)currencyType;

+ (void)peiSuccess:(int)amount orderID:(NSString*)orderID peiType:(NSString*)peiType pppID:(NSString*)pppID currencyType:(NSString*)currencyType;

+ (void)peiFailed:(int)amount orderID:(NSString*)orderID peiType:(NSString*)peiType pppID:(NSString*)pppID currencyType:(NSString*)currencyType;

+ (void)peiCanceled:(int)amount orderID:(NSString*)orderID peiType:(NSString*)peiType pppID:(NSString*)pppID currencyType:(NSString*)currencyType;
@end
