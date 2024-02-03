/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  // Initialize a map to hold sorted patterns as keys and arrays of strings as values.
  const strMap = new Map<string, string[]>();

  // Iterate over each string in the input array.
  for (const str of strs) {
    // Sort the string to create a common pattern for anagrams.
    const pattern = str.split("").sort().join("");

    // Get the list of words already mapped to this pattern, or initialize it if not present.
    const prev = strMap.get(pattern) || [];

    // Add the current string to the list of its pattern group.
    prev.push(str);

    // Update the map with the new list.
    strMap.set(pattern, prev);
  }

  // Collect all values from the map into an array and return it.
  // This is equivalent to Array.from(strMap.values())
  return [...strMap.values()];
}

// better solution is letter array map instead of sorted map
// @lc code=end
