// write twoSum function
// write main function

#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>
using namespace std;


// twoSum function
// explain this line for me
// vector<int> twoSum(vector<int>& nums, int target) {  // vector<int> is the return type
//     unordered_map<int, int> map;                    // unordered_map is a data structure
//     vector<int> result;                             // vector<int> is a data structure
//     for (int i = 0; i < nums.size(); i++) {         // for loop
//         int numToFind = target - nums[i];           // int is a data type
//         if (map.find(numToFind) != map.end()) {     // if statement
//             result.push_back(map[numToFind]);       // push_back is a vector function
//             result.push_back(i);                    // push_back is a vector function
//             return result;                          // return is a function
//         }
//         map[nums[i]] = i;                           // map is a data structure
//     }

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

