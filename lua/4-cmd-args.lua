#!/usr/bin/env lua5.3

-- via Programming.in.Lua.4th.Edition.2016.8 1. Getting Started The Stand-Alone Interpreter

for i = -2, #arg, 1 do
    print(string.format('arg[%d]=%s', i, arg[i]))
end
