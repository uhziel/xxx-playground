CC    = g++
CFLAGS = -g

all: 1-unsigned 3-size 4-sort 5-std-vector 6-infinite-loop

1-unsigned: 1-unsigned.cpp
	$(CC) $(CFLAGS) 1-unsigned.cpp -o 1-unsigned

# 使用了 #include <windows.h>，只能在 vc 环境下执行
# 2-tick: 2-tick.cpp
#	$(CC) $(CFLAGS) 2-tick.cpp -o 2-tick

3-size: 3-size.cpp
	$(CC) $(CFLAGS) 3-size.cpp -o 3-size

4-sort: 4-sort.cpp
	$(CC) $(CFLAGS) 4-sort.cpp -o 4-sort

5-std-vector: 5-std-vector.cpp
	$(CC) $(CFLAGS) 5-std-vector.cpp -o 5-std-vector

6-infinite-loop: 6-infinite-loop.cpp
	$(CC) $(CFLAGS) 6-infinite-loop.cpp -o 6-infinite-loop

clean:
	rm -r 1-unsigned 3-size 4-sort 5-std-vector 6-infinite-loop *.dSYM || true


