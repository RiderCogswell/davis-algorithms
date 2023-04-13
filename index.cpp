// write twoSum function
// write main function

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;


// twoSum function
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    vector<int> result;
    for (int i = 0; i < nums.size(); i++) {
        int numToFind = target - nums[i];
        if (map.find(numToFind) != map.end()) {
            result.push_back(map[numToFind]);
            result.push_back(i);
            return result;
        }
        map[nums[i]] = i;
    }
    return result;
}

