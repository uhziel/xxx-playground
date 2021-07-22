// stable_sort example
#include <iostream>     // std::cout
#include <algorithm>    // std::stable_sort
#include <vector>       // std::vector

bool compare_ints (int lhs, int rhs)
{
  if (lhs == rhs)
  {
      return false;
  }
  if (rhs == 1)
  {
      return true;
  }
  if (lhs == 0)
  {
      return true;
  }
  return false;
}

int main () {
  int tmp[] = { 2, 7, 4, 1, 0};

  std::vector<int> int_vec;

  int_vec.assign(tmp,tmp+5);

  std::sort (int_vec.begin(), int_vec.end(), compare_ints);
  for (std::vector<int>::iterator it=int_vec.begin(); it!=int_vec.end(); ++it)
    std::cout << ' ' << *it;
  std::cout << '\n';

  return 0;
}
