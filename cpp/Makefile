CC    = g++
CFLAGS = -g

all: 1-unsigned 3-size 4-sort

1-unsigned: 1-unsigned.cpp
	$(CC) $(CFLAGS) 1-unsigned.cpp -o 1-unsigned

# 使用了 #include <windows.h>，只能在 vc 环境下执行
# 2-tick: 2-tick.cpp
#	$(CC) $(CFLAGS) 2-tick.cpp -o 2-tick

3-size: 3-size.cpp
	$(CC) $(CFLAGS) 3-size.cpp -o 3-size

4-sort: 4-sort.cpp
	$(CC) $(CFLAGS) 4-sort.cpp -o 4-sort

clean:
	rm 1-unsigned 3-size 4-sort
