class TimeMap {
  store: Map<string, Array<[number, string]>>;

  constructor() {
    this.store = new Map<string, Array<[number, string]>>();
  }

  set(key: string, value: string, timestamp: number): void {
    // get the timeList
    let timeList = this.store.get(key);
    // if timeList undefined, you need to create the map element
    if (timeList == undefined) timeList = [];
    // insert value (timestamps strictly increasing)
    timeList?.push([timestamp, value]);
    // update the value in store
    this.store.set(key, timeList!);
  }

  get(key: string, timestamp: number): string {
    let retVal = "";
    // get the timeList
    let timeList = this.store.get(key);
    if (timeList == undefined) return retVal;

    return search(timeList, timestamp);
  }
}

function search(timeList: Array<[number, string]>, target: number): string {
  let l = 0,
    r = timeList.length - 1,
    bestIdx = -1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (timeList[mid][0] == target) {
      return timeList[mid][1];
    } else if (timeList[mid][0] < target) {
      bestIdx = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return bestIdx !== -1 ? timeList[bestIdx][1] : "";
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
