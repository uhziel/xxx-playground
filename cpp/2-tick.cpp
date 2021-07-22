#include <iostream>
#include <windows.h>

int main() {
    DWORD t1 = 4294967295;
    DWORD t2 = 2;
    DWORD delta = t2 - t1;
    std::cout << "DWORD delta:" << delta << std::endl;

    unsigned long long lt1 = 4294967295;
    unsigned long long lt2 = 2;
    unsigned long long ldelta = lt2 - lt1;
    std::cout << "unsigned long long delta:" << ldelta << std::endl;
}
