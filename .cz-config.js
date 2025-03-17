module.exports = {
  // 可选的提交类型
  types: [
    { value: 'feat', name: '✨ feat: 新功能' },
    { value: 'fix', name: '🐛 fix: 修复' },
    { value: 'docs', name: '📝 docs: 文档变更' },
    { value: 'style', name: '🎨 style: 代码格式(不影响代码运行的变动)' },
    { value: 'refactor', name: '🔨 refactor: 重构(既不是增加feature，也不是修复bug)' },
    { value: 'chore', name: '🗯  chore: 构建过程或辅助工具的变动' },
    { value: 'perf', name: '🚀 perf: 性能优化' },
    { value: 'test', name: '✅ test: 增加测试' },
    { value: 'revert', name: '⏪ revert: 回退' },
    { value: 'build', name: '📦 build: 打包' }
  ],
  // 提示问题
  messages: {
    type: "选择提交类型:",
    customScope: "输入提交编号（如分支名或自定义 ID，可选）:",
    subject: "输入简短的提交描述（必填）:\n",
    body: "提供详细描述（可选，按 | 分割换行）:\n",
    footer: "输入问题单号（如 #123，可选）:\n"
  },
  // 是否允许自定义 scope（提交编号）
  allowCustomScopes: true,
  // 是否允许空 scope
  allowEmptyScopes: true,
  // 是否允许破坏性变更
  allowBreakingChanges: ["feat", "fix"],
  // 提交消息格式
  subjectLimit: 100, // 描述最大长度
  breaklineChar: "|", // body 中的换行符
  footerPrefix: "ISSUES:", // 问题单号前缀
  // 默认值（可选）
  defaultScope: "",
  defaultSubject: "",
  defaultBody: "",
  defaultFooter: ""
};