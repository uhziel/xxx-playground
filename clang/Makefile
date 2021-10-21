all: s1-zombie-process.out

%.out: %.c
	$(CC) $(CFLAGS) $< -o $@

clean:
	rm *.out
