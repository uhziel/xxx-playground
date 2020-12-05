#!/usr/bin/env lua5.3


str = "hello " .. "world" -- concatenate
str2 = "hello world"
str3 = "hello world1"
print("str:", str)
print("str == str2 <-", str == str2) -- compare
print("str == str3 <-", str == str3) -- compare
print("the length of str:", #str) -- get string lengths

-- https://www.lua.org/manual/5.3/manual.html#6.4 String Manipulation
print('string.sub("abc", 1, 2) <- ', string.sub("abc", 1, 2)) -- string.sub (s, i [, j])
print('string.find("abc", "bc") <- ', string.find("abc", "bc")) -- string.find (s, pattern [, init [, plain]])
print('string.gsub("hello", "l", ".") <- ', string.gsub("hello", "l", "."))
print(string.format("string.format() hello %d %f 0x%x %s", 123, 12.3, 15, "abc")) -- string.format (formatstring, ···)

-- evernote: lua Pattern Matching 汇总
print('string.match("hello world", "%w+") <- ', string.match("hello world", "%w+"))
