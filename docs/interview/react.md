# React系列

React，用于构建用户界面的 JavaScript 库，只提供了 UI 层面的解决方案
`React` 特性有很多，如：

*   JSX语法
将原始 HTML 模板嵌入到 JS 代码中
*   单向数据绑定

*   虚拟DOM

*   声明式编程

*   Component

*   高效灵活

*   声明式的设计，简单使用

*   组件式开发，提高代码复用率

*   单向响应的数据流会比双向绑定的更安全，速度更快

着重介绍下声明式编程及Component

## React生命周期的各个阶段是什么？

::: details
在 React 中，组件的生命周期经历了不同的阶段。在 React 16.3 版本之前，生命周期包括三个阶段：挂载（Mounting）、更新（Updating）、卸载（Unmounting）。从 React 16.3 版本开始，部分生命周期方法被标记为过时，引入了新的生命周期方法。

### 1. 挂载阶段（Mounting）：

* **constructor：** 初始化 state 和绑定事件处理函数（不推荐在 constructor 中执行副作用操作）。
* **static getDerivedStateFromProps：** 在初始化和接收新的 props 时触发，用于在 props 变化时更新 state。
* **render：** 渲染组件。
* **componentDidMount：** 组件挂载后执行，通常用于进行网络请求、DOM 操作或订阅事件。

### 2. 更新阶段（Updating）：

* **static getDerivedStateFromProps：** 同挂载阶段的使用，根据 props 更新 state。
* **shouldComponentUpdate：** 控制组件是否重新渲染，默认返回 true。用于性能优化。
* **render：** 重新渲染组件。
* **getSnapshotBeforeUpdate：** 在更新 DOM 前获取当前的 DOM 信息，比如滚动位置。
* **componentDidUpdate：** 更新完成后执行，通常用于操作 DOM 或执行其他副作用。

### 3. 卸载阶段（Unmounting）：

* **componentWillUnmount：** 组件即将被卸载前执行，用于清除定时器、取消网络请求等清理工作。

### 4. 错误处理阶段（Error Handling）：

* **static getDerivedStateFromError：** 在子组件抛出错误后触发，用于更新 state 以展示错误信息。
* **componentDidCatch：** 捕获子组件的 JavaScript 错误或异常，并进行处理，避免整个应用崩溃。

### 5. 新引入的生命周期方法（React 16.3+）：

* **static getDerivedStateFromProps**：替代了 componentWillReceiveProps，用于在 props 发生变化时更新 state。
* **getSnapshotBeforeUpdate**：在更新前获取 DOM 信息，替代了 componentWillUpdate。
* **componentDidCatch**：错误边界，替代了错误处理阶段中的 componentDidCatch。

从 React 17 开始，一些生命周期方法被标记为不推荐使用，React 建议使用函数式组件和 Hooks 来替代传统的生命周期方法。
:::

## 虚拟 DOM 的原理是什么？

::: details

虚拟 DOM 就是虚拟节点（这句汉化很重要）。React 用 JS 对象来**模拟** DOM 节点，然后将其渲染成真实的 DOM 节点。

**Real DOM**       | **Virtual DOM**     |
| ------------------ | ------------------- |
| 1. 更新缓慢。           | 1. 更新更快。            |
| 2. 可以直接更新 HTML。    | 2. 无法直接更新 HTML。     |
| 3. 如果元素更新，则创建新DOM。 | 3. 如果元素更新，则更新 JSX 。 |
| 4. DOM操作代价很高。      | 4. DOM 操作非常简单。      |
| 5. 消耗的内存较多。        | 5. 很少的内存消耗。         |

1. 优点：
性能优化： 通过虚拟 DOM 的比对算法，避免了不必要的 DOM 操作，提高了页面更新的效率。
跨平台使用： 虚拟 DOM 的思想不仅适用于浏览器端的 React，也可以应用在其他平台，比如 React Native。
2. 缺点：
虽然虚拟 DOM 可以提高性能，但在某些情况下，过于频繁的更新可能会导致性能下降，因此需要合理地使用 shouldComponentUpdate 或者 React 提供的 PureComponent、Memo 等进行性能优化。
:::

## state 和 props

::: details
在 React 中， `state` 和 `props` 是组件中用来存储和管理数据的两个重要概念：

### Props（属性）：

* **传递数据：** `props` 是从父组件向子组件传递数据的方式，是只读的，子组件不能直接修改 props。
* **单向数据流：** props 是单向传递的，即从父组件传递到子组件，子组件无法直接影响父组件的 props。
* **数据来源：** 来自于父组件，作为子组件的配置信息，用于定义组件的外部接口。
* **不可变性：** props 是不可变的，只能从外部改变传入的 props 值。

### State（状态）：

* **组件内部状态：** `state` 是组件内部管理和维护的数据，可变且受控于组件自身。
* **用途：** 通常用于描述随时间变化的数据，当 `state` 更新时，React 会重新渲染组件。
* **初始化：** 在组件的构造函数中初始化，并通过 `setState` 方法进行更新。
* **局部使用：** 仅在当前组件范围内有效，不会传递给子组件。

### 区别与联系：

* **来源不同：** `props` 来自于父组件传递，是外部传入的数据；`state` 是组件内部维护和管理的数据。
* **可变性：** `props` 是只读的，一旦传入组件，就不会再改变；而 `state` 是可变的，组件可以通过 `setState` 方法更新自己的 `state`。
* **传递机制：** `props` 是单向数据流，自上而下地传递给子组件；而 `state` 是组件内部的状态，可被组件自身修改。

在 React 组件中， `props` 用于传递数据和配置组件，而 `state` 用于管理组件的内部状态。合理使用 `props` 和 `state` 可以使组件高效、可维护和可复用。
:::

## React setState 调用之后发生了什么？是同步还是异步？

::: details
在 React 中， `setState` 方法用于更新组件的状态。调用 `setState` 之后会触发一系列 React 的更新流程：

### 1. 更新状态对象：

* 当调用 `setState` 时，React 会将传入的状态对象合并到组件的状态队列中，并不会立即更新组件的状态。

### 2. 引发组件重新渲染：

* React 将会在合适的时机，通过执行更新队列中的任务，触发组件的重新渲染。这时候，React 会根据新的状态计算出新的虚拟 DOM 树。

### 3. 执行合成事件和生命周期：

* 如果 `setState` 是在 React 事件处理函数（比如点击事件、表单提交等）中调用的，React 会在当前事件处理函数结束后，批量处理更新队列，而不是立即执行更新。这样做可以提高性能，减少不必要的重复渲染。

### 同步还是异步？

* **一般情况下是异步的：** React 并不保证 `setState` 的更新是同步的，多个 `setState` 调用会被合并为一个更新批处理，以提高性能。

* **批量更新机制：** React 会将多次 `setState` 调用合并成一个更新批处理，然后按照一定的策略进行更新。这个机制确保了性能，并避免了不必要的重复渲染。

* **特殊情况下可能是同步的：** 在某些情况下，`setState` 可能是同步的，比如在生命周期方法中或原生事件（不是由 React 控制的事件）中调用 `setState`，此时更新会是同步的。

React 保证了更新的一致性和性能，通过批量处理 `setState` 来提高性能并避免不必要的重复渲染。因此，通常情况下 `setState` 是异步执行的，更新会在合适的时机批量进行。
:::

## 组件通信

::: details
 父子组件的通信方式？

### 父组件向子组件通信：父组件通过 props 向子组件传递需要的信息。

```JSX
// 子组件: Child
const Child = props => {
  return <p > {
    props.name
  } < /p>
}
// 父组件 Parent
const Parent = () => {
  return <Child name = "react" > < /Child>
}
```

### 子组件向父组件通信：: props+回调callback。

```JSX
const Child = props => {
  const cb = msg => {
    return () => {
      props.callback(msg)
    }
  }
  return ( <
    button onClick = {
      cb("你好!")
    } > 你好 < /button>
  )
}
// 父组件 Parent
class Parent extends Component {
  callback(msg) {
    console.log(msg)
  }
  render() {
    return <Child callback = {
      this.callback.bind(this)
    } > < /Child>
  }
}
```

### 跨级组件的通信方式

使用 React 的 Context API，在组件树中传递数据，使得在组件树的任何位置都能访问特定的数据或状态。

```JSX
// context方式实现跨级组件通信
// Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据
const BatteryContext = createContext();
//  子组件的子组件
class GrandChild extends Component {
    render(){
        return (
            <BatteryContext.Consumer>
                {
                    color => <h1 style={{"color":color}}>我是红色的:{color}</h1>
                }
            </BatteryContext.Consumer>
        )
    }
}
//  子组件
const Child = () =>{
    return (
        <GrandChild/>
    )
}
// 父组件
class Parent extends Component {
      state = {
          color:"red"
      }
      render(){
          const {color} = this.state
          return (
          <BatteryContext.Provider value={color}>
              <Child></Child>
          </BatteryContext.Provider>
          )
      }
}
```

### Redux

* Redux 是一个状态管理库/状态容器。

#### 核心概念：

1. **Store：** 状态的容器，包含了应用的状态树。通过 `createStore` 方法创建。

2. **Action：** 描述对状态进行修改的对象，必须包含 `type` 属性。使用 `dispatch` 方法将 action 分发到 reducer。

3. **Reducer：** 纯函数，接收旧的 state 和 action，并返回新的 state。它用于根据 action 更新 state。

4. **Dispatch：** 将 action 分发给 reducer 来触发状态的变化。使用 `store.dispatch(action)` 来分发 action。

#### 安装 Redux：

```bash
npm install redux
```

#### 创建 Store：

```javascript
// store.js
import {
  createStore
} from 'redux';
import rootReducer from './reducers'; // 根 reducer

const store = createStore(rootReducer);
export default store;
```

#### 编写 Reducer：

```javascript
// reducers.js
const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state, count: state.count - 1
      };
    default:
      return state;
  }
};

export default rootReducer;
```

#### Dispatch Action：

```javascript
// actions.js
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});
```

在 React 中结合 Redux 使用时，通常使用 `react-redux` 提供的 `Provider` 组件将 Redux 的 `store` 注入整个应用，同时使用 `connect` 函数连接组件与 Redux 的 `store` ，使组件能够访问到 Redux 中的状态和派发 Action 的方法。

:::

##  React Hooks

[对 React Hook 的理解](https://juejin.cn/post/7229217442424455226)
1. 函数式组件增强： 允许在函数式组件中使用 React 特性，如状态、副作用等，使函数式组件具备类组件的功能。

2. 可复用逻辑： Hooks 可以帮助提取和复用组件逻辑，使得逻辑更易于测试、理解和重用。

## useCallback 和 useMemo 的使用场景

::: details
useCallback 和 useMemo 可以用来缓存函数和变量，提高性能，减少资源浪费。但并不是所有的函数和变量都需要用这两者来实现，他也有对应的使用场景。

我们知道 useCallback 可以缓存函数体，在依赖项没有变化时，前后两次渲染时，使用的函数体是一样的。它的使用场景是：

*   函数作为其他 hook 的依赖项时（如在 useEffect()中）；
*   函数作为 React.memo()（或 shouldComponentUpdate ）中的组件的 props；

主要是为了避免重新生成的函数，会导致其他 hook 或组件的不必要刷新。

useMemo 用来缓存函数执行的结果。如每次渲染时都要执行一段很复杂的运算，或者一个变量需要依赖另一个变量的运算结果，就都可以使用 useMemo()。
:::

## React Hooks 如何模拟组件生命周期？

::: details

1.  模拟 componentDidMount

<!---->

```js
  // componentDidUpdate
  useEffect(() => {
    if (first.current === true) {
      return
    }
    console.log('did update')
  })
```

2.  模拟 componentDidUpdate和componentWillUnmount

```js
  // componentDidMount
  useEffect(() => {
    console.log('did mount')
    first.current = false
    return () => {
      console.log('did unmount')
    }
  }, [])
```

<!---->
:::

## 说说对高阶组件（HOC）的理解？

::: details
高阶组件（Higher-Order Components，HOC）是 React 中一种常见的模式，用于复用组件逻辑、增强组件功能、或者对现有组件进行包装。

### HOC 的特点：

1. **函数接收组件作为参数：** HOC 是一个函数，接收一个组件作为参数，并返回一个新的增强型组件。

2. **返回新组件：** HOC 返回的新组件可以拥有状态、逻辑、生命周期方法等，并可以渲染被包装的组件。

3. **增强组件功能：** HOC 可以在不改变原始组件代码的情况下，为组件增加新的功能、属性或状态。

### HOC 的应用场景：

1. **代码复用：** 在多个组件之间共享相同的逻辑或状态，可以将该逻辑抽象成 HOC，并在需要时使用。

2. **渲染劫持：** HOC 可以对组件的渲染进行劫持，例如添加 Loading 状态、认证控制等。

3. **逻辑抽象：** 将通用的逻辑抽象到 HOC 中，例如处理表单逻辑、数据获取等。

### 示例：

```JSX
// 高阶组件示例：增加日志记录功能的 HOC
import React from 'react';

const withLogger = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component "${WrappedComponent.name}" mounted`);
    }

    render() {
      return <WrappedComponent {
        ...this.props
      }
      />;
    }
  };
};

// 使用高阶组件包装原始组件
class MyComponent extends React.Component {
  render() {
    return <div > Hello, HOC! </div>;
  }
}

const EnhancedComponent = withLogger(MyComponent); // 使用高阶组件包装 MyComponent

// 在应用中渲染增强后的组件
function App() {
  return (
    <div>
    <EnhancedComponent/>
    </div>
  );
}

export default App;
```

在这个示例中， `withLogger` 是一个高阶组件，接收一个组件作为参数，并返回一个增强了日志记录功能的新组件。被 `withLogger` 包装的 `MyComponent` 在渲染时会输出组件挂载的日志信息。

高阶组件是 React 中一种非常灵活的模式，可以有效地实现代码复用、逻辑抽象和组件增强等功能。
:::

## 说说对React refs 的理解？

::: details
在 React 中，refs 是一个用于访问在 DOM 元素或类组件实例上的引用的技术。它提供了一种方式来直接访问组件实例或 DOM 元素，以便在需要时可以操作它们。

### 使用场景：

1. **访问 DOM 元素：** 通过 refs 可以访问 DOM 元素，执行 DOM 操作或获取元素信息（如输入框的值、滚动位置等）。

2. **访问类组件实例：** 通过 refs 可以访问类组件实例，在需要时调用组件中的方法或获取其状态。

### 创建 refs：

1. **通过 React.createRef()：** 在类组件中使用 `React.createRef()` 来创建一个 ref 对象。

```JSX
   class MyComponent extends React.Component {
     constructor(props) {
       super(props);
       this.myRef = React.createRef();
     }

     render() {
       return <div ref = {this.myRef}> Example </div>;
     }
   }
```

2. ** 在函数组件使用回调函数来创建 refs。

```JSX
  function App(props) {
  const myref = useRef()
  return (
    <>
      <div ref={myref}></div>
    </>
  )
}

```
