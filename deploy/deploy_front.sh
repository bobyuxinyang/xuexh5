#!/usr/bin/expect -f

set timeout -1

# inner server  xinzhaitong-admin-1
#spawn scp -r ./xuexh5-website.zip freefcw@76.74.178.79:/data/www/xuexh5
spawn scp -r ./xuexh5-website.zip root@121.42.11.68:/data/www/xuexh5
expect "*assword:*"
send "iampangxieDEV002\r"
interact

spawn ssh root@121.42.11.68
expect "*assword:*"
send "iampangxieDEV002\r"

send "cd /data/www/xuexh5\r"

send "rm -rf ./dist\r"
send "unzip xuexh5-website.zip -d ./dist\r"

send "rm -rf xuexh5-website.zip\r"
send "exit\r"
interact