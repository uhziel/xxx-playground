#!/usr/bin/env lua5.3

function foobar()
  for i=1, 10 do
      if i == 3 then
        goto CONTINUE
      end
      print(i)
      ::CONTINUE::
  end
end

foobar()
