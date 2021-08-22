#include <vector>
#include <iostream>

int main () {
    std::vector<int> IntVec;
    for (size_t i = 0; i < 10; i++)
    {
        IntVec.push_back(i);
    }
    return 0;
}
