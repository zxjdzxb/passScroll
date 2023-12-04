## 队列

队列（Queue，发音为 [kjuː] ），是一种基于先进先出（First In First Out，简称 FIFO）的数据结构，是一种受限的线性表，只能在一端（前端，front）进行插入，另一端（后端，rear）进行删除操作。

<!-- 

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/672c3ce284134fafa5dab7af27174bdd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)

 -->

队列的实现和栈一样，有两种方案：

* 基于数组实现。
* 基于链表实现。

### 队列常见的操作

* `enqueue(element)` 向队列尾部添加一个（或多个）新的项。
* `dequeue()` 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
* `front()` 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息与 Map 类的 peek 方法非常类似）。
* `isEmpty()` 如果队列中不包含任何元素，返回 true，否则返回 false。
* `size()` 返回队列包含的元素个数，与数组的 length 属性类似。
* `toString()` 将队列中的内容，转成字符串形式。

## 优先队列

### 优先级队列主要考虑的问题：

每个元素不再只是一个数据，还包含优先级。
在添加元素过程中，根据优先级放入到正确位置。
