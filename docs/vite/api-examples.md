---
outline: deep
---

# 运行时API示例

这个页面演示了一些由VitePress提供的运行时api的用法。

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 结果

1. Theme Data

<pre>{{ theme }}</pre>

2. Page Data

<pre>{{ page }}</pre>

3. Page Frontmatter

<pre>{{ frontmatter }}</pre>

## 更多

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
