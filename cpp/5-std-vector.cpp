#include <vector>
#include <iostream>

int main () {
    std::vector<int> IntVec;
    for (size_t i = 0; i < 10; i++)
    {
        IntVec.push_back(i);
    }
    int i = 1 / 0;
    return 0;
}
