#!/usr/bin/expect -f

set timeout -1

# inner server  xinzhaitong-admin-1
spawn scp -r ./xuexh5-website.zip freefcw@76.74.178.79:/data/www/xuexh5
expect "*assword:*"
send "Xinzhaitongdev007\r"
interact

spawn ssh freefcw@76.74.178.79
expect "*assword:*"
send "Xinzhaitongdev007\r"

send "cd /data/www/xuexh5\r"

send "rm -rf ./dist\r"
send "unzip xuexh5-website.zip -d ./dist\r"

send "rm xuexh5-website.zip\r"
send "exit\r"
interact