#import <Foundation/Foundation.h>

typedef NS_ENUM(NSUInteger, Gender) {
    Gender_Unknown,
    Gender_Male,
    Gender_Female
};

@interface CAAccount : NSObject

+ (void)loginStart;
+ (void)loginStart:(NSString*)channel;
+ (void)loginSuccess:(NSString*)uid age:(int)age sex:(int)sex channel:(NSString*)channel;
+ (void)loginSuccess:(NSString*)uid age:(int)age sex:(int)sex;
+ (void)loginSuccess:(NSString*)uid;
+ (void)loginFailed:(NSString *)reason channel:(NSString*)channel;
+ (void)loginFailed:(NSString *)reason;
+ (void)logout;
+ (void)setAccountType:(NSString*)accountType;
+ (void)setAge:(int)age;
+ (void)setGender:(int)gender;
+ (void)createRole:(NSString*)roleID userName:(NSString*)userName race:(NSString*)race
         roleClass:(NSString*)roleClass gameServer:(NSString*)gameServer;
+ (void)setLevel:(int)level;

@end
