def countingSort(arr):
  count = [0]*100

  for x in arr:
    count[x] += 1

  print(count)

countingSort([ 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])

def twoSum(nums, target):
  for i in range(len(nums)):
    for j in range(i+1, len(nums)):
      if nums[i] + nums[j] == target:
        print([i, j])

def threeSum(nums, target):
  nums.sort()
  for i in range(len(nums)):
    left = i + 1
    right = len(nums) - 1
    while left < right:
      currentSum = nums[i] + nums[left] + nums[right]
      if currentSum == target:
        triplets = [nums[i], nums[left], nums[right]]
        left += 1
        right -= 1
      elif currentSum < target:
        left += 1
      else:
        right -= 1
  print(triplets)

threeSum([-1, 0, 1, 2, -1, 4], 6)