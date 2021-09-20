/*
$ top
    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND                     
  12573 zhulei    20   0    5716   1648   1492 R  99.7   0.0   0:43.10 5-infinite-loop 
什么事情都没有做，就是空转死循环，就可以达到 cpu 100%
*/
int main() {
    while (true) {
    }
    return 0;
}
