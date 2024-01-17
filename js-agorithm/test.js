/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map() // Map used for O(1) access
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key)
      // Delete and re-insert the key-value pair to update its access position
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
    }
    return -1 // Return -1 if key doesn't exist
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key) // If key exists, delete it to update its access position
    } else if (this.cache.size >= this.capacity) {
      // If cache is full, remove the least recently used item (first entry)
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
    this.cache.set(key, value) // Insert the key-value pair
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// Create an LRU Cache with a capacity of 2
const lruCache = new LRUCache(2)

// Perform operations
// lruCache.put(1, 1) // Cache: {1=1}
// lruCache.put(2, 2);   // Cache: {1=1, 2=2}
// lruCache.get(1) // Return 1 (accessing 1), Cache: {2=2, 1=1}
// lruCache.put(3, 3);   // Cache is full, remove the least recently used item (2), then add 3, Cache: {1=1, 3=3}
// lruCache.get(2);      // Return -1 (2 is no longer in the cache)
// lruCache.put(4, 4);   // Cache is full, remove the least recently used item (1), then add 4, Cache: {3=3, 4=4}
// lruCache.get(1);      // Return -1 (1 is no longer in the cache)
// lruCache.get(3);      // Return 3 (accessing 3), Cache: {4=4, 3=3}
// lruCache.get(4);      // Return 4 (accessing 4), Cache: {3=3, 4=4}
console.log(lruCache.get(1))
