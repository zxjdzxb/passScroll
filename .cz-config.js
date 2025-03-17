const { execSync } = require("child_process");

const getBranchCode = (function() {
  let sequence = 0; // 当天提交计数器

  // 重置计数器（每天重置）
  let lastDate = null;

  return function() {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const dateStr = `${year}${month}${day}`;

      // 检查是否跨天，重置计数器
      const currentDate = `${year}-${month}-${day}`;
      if (lastDate !== currentDate) {
        sequence = 0; // 新的一天，重置为 0
        lastDate = currentDate;
      }

      sequence += 1; // 递增
      const sequenceStr = String(sequence).padStart(3, "0"); // 补齐 3 位，如 001

      return `${dateStr}${sequenceStr}`; // 例如 20250317001
    } catch (e) {
      return "";
    }
  };
})();

module.exports = {
  // 可选提交类型
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
    scope: "输入提交编号（如 #20250317002）:",
    subject: "输入简短的功能描述（必填，例如 '预算调整信息界面增加配置权限和自定义显示'）:\n",
    body: "提供详细实现步骤（可选，按 | 分割，例如 '实现权限配置功能 | 支持字段自定义显示和保存'）:\n",
    footer: "输入问题单号（可选，例如 PRJGX202503006，会自动添加 [] 包裹）:\n"
  },
  // 配置 scope（提交编号）
  allowCustomScopes: true,
  allowEmptyScopes: false, // 提交编号必填
  // 自定义 footer 前缀和格式
  footerPrefix: "[", // 前缀为 [
  appendFooterPrefix: true, // 自动添加前缀
  // 注意：cz-customizable 默认不支持直接添加后缀 ]，需通过钩子或手动输入实现
  // 其他设置
  allowBreakingChanges: ["feat", "fix"],
  subjectLimit: 100,
  breaklineChar: "|",
  // 默认值
  defaultType: "feat",
  defaultScope: getBranchCode(),
  defaultSubject: "",
  defaultBody: "",
  defaultFooter: ""
};

// 自定义 footer 处理逻辑（可选）
function formatFooter(footer) {
  if (footer) {
    return `[${footer}]`; // 手动添加前后 []
  }
  return "";
}