#!/usr/bin/env bash
# https://www.gnu.org/software/bash/manual/html_node/Shell-Parameters.html
# https://wangdoc.com/bash/script.html#%E8%84%9A%E6%9C%AC%E5%8F%82%E6%95%B0 脚本参数

# $0：脚本文件名，即 script.sh。
# $1~$9：对应脚本的第一个参数到第九个参数。
# $#：参数的总数。
# $@($1 $2...)：全部的参数，参数之间使用空格分隔。
# $*("$1$IFS$2...")：全部的参数被包入一个字符串，参数之间使用变量$IFS值的第一个字符分隔，默认为空格，但是可以自定义。

echo "$0" "$@"
