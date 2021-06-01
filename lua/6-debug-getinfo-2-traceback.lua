#!/usr/bin/env lua5.3

-- https://www.lua.org/pil/23.1.html 自省工具 debug.getinfo() 性能有点低
--[[
    `n´	selects fields name and namewhat
    `f´	selects field func
    `S´	selects fields source, short_src, what, and linedefined
    `l´	selects field currentline
    `u´	selects field nup
]]

local function traceback()
    local level = 1
    while true do
      local info = debug.getinfo(level, "Sl")
      if not info then break end
      if info.what == "C" then   -- is a C function?
        print(level, "C function")
      else   -- a Lua function
        print(string.format("[%s]:%d",
                            info.short_src, info.currentline))
      end
      level = level + 1
    end
end

local function c()
  traceback()
end

local function b()
  c()
end

local function a()
  b()
end

a()
