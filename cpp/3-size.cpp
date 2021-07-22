#include <iostream>     // std::cout

enum FruitType
{
    Apple,
    Pear,
};

int main () {
    FruitType enum_type = Pear;
    int int_type = 0;
    std::cout << "sizeof(FruitType)" << sizeof(enum_type) << std::endl;
    std::cout << "sizeof(int_type)" << sizeof(int_type) << std::endl;
    return 0;
}
