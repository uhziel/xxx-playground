#!/usr/bin/env lua5.3

-- https://www.lua.org/manual/5.3/manual.html#2.3
-- https://www.lua.org/pil/8.5.html

if #arg < 1 then
    error('args too little.')
end

print('hello ', arg[1])
