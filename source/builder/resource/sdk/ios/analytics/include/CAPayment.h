#import <Foundation/Foundation.h>

@interface CAPayment : NSObject
+ (void)payBegin:(NSString*)amount orderID:(NSString*)orderID payType:(NSString*)payType subjectID:(NSString*)subjectID currencyType:(NSString*)currencyType virtualCurrencyAmount:(NSString*)virtualCurrencyAmount accountID:(NSString*)accountID partner:(NSString*)partner gameServer:(NSString*)gameServer level:(NSString*)level mission:(NSString*)mission;

+ (void)paySuccess:(NSString*)amount orderID:(NSString*)orderID payType:(NSString*)payType subjectID:(NSString*)subjectID currencyType:(NSString*)currencyType virtualCurrencyAmount:(NSString*)virtualCurrencyAmount accountID:(NSString*)accountID partner:(NSString*)partner gameServer:(NSString*)gameServer level:(NSString*)level mission:(NSString*)mission;

+ (void)payFailed:(NSString*)amount orderID:(NSString*)orderID payType:(NSString*)payType subjectID:(NSString*)subjectID currencyType:(NSString*)currencyType virtualCurrencyAmount:(NSString*)virtualCurrencyAmount accountID:(NSString*)accountID partner:(NSString*)partner gameServer:(NSString*)gameServer level:(NSString*)level mission:(NSString*)mission reason:(NSString*)reason;

+ (void)payCanceled:(NSString*)amount orderID:(NSString*)orderID payType:(NSString*)payType subjectID:(NSString*)subjectID currencyType:(NSString*)currencyType virtualCurrencyAmount:(NSString*)virtualCurrencyAmount accountID:(NSString*)accountID partner:(NSString*)partner gameServer:(NSString*)gameServer level:(NSString*)level mission:(NSString*)mission;

@end
