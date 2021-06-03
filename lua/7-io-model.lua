#!/usr/bin/env lua5.3

-- Programming.in.Lua.4th.Edition.2016.8 1. -> Chapter 7. The External World

-- level 1: print
print('hello', 'world')

-- level 2: The Simple I/O Model
local name = io.read('l')
io.write(string.format('hello %s\n', name))
io.input('/proc/meminfo')
local meminfo = io.read("a")
io.write(meminfo)

-- level 3: The Complete I/O Model
local cpuinfoFile = assert(io.open('/proc/cpuinfo', "r"))
local cpuinfo = cpuinfoFile:read("a")
cpuinfoFile:close()
io.stderr:write(cpuinfo)
