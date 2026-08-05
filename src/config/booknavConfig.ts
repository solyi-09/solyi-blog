import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写项目时离不开的站点",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
				// icon 字段可以使用 astro-icon 图标库的图标名称
				// 也可以使用图片 URL 和本地图片路径
				// 不填则会通过接口自动获取目标站点的 favicon 图标（需要在上面配置）
				icon: "fa7-brands:github",
				weight: 10,
			},
			{
				title: "Tailwind CSS",
				url: "https://tailwindcss.com",
				desc: "一个功能强大且灵活的 CSS 框架",
				weight: 6,
			},
			{
				title: "rayinai",
				url: "https://code.rayinai.com/home?aff=MOMO",
				desc: "一个全面且稳定的AI中转站",
				weight: 6,
			},
			{
				title: "在线绘图",
				url: "https://code.rayinai.com/extension/draw",
				desc: "一个可以生成4k高清图的在线绘图AI工具",
				weight: 6,
			},
		],
	},
	{
		id: "opensource",
		name: "项目",
		icon: "material-symbols:code-rounded",
		desc: "一些其他的项目",
		weight: 90,
		items: [
			{
				title: "solyi",
				url: "https://www.solyi.cn",
				desc: "solyi主站点",
				icon: "https://celebrate.solyi.cc/fries.svg",
				weight: 10,
			},
			{
				title: "celebrate",
				url: "https://www.celebrate.solyi.cc",
				desc: "celebrate-莎头网站",
				icon: "https://celebrate.solyi.cc/fries.svg",
				weight: 10,
			},
			{
				title: "celebrate-admin",
				url: "https://celebrate-admin.solyi.cc",
				desc: "一个马里奥风格的后台管理系统",
				icon: "https://celebrate.solyi.cc/fries.svg",
				weight: 10,
			},
		],
	},
	{
		id: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		desc: "配色、图标与灵感来源",
		weight: 90,
		items: [
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "海量开源图标集合搜索",
				weight: 10,
			},
			{
				title: "iconfont",
				url: "https://www.iconfont.cn",
				desc: "阿里巴巴矢量图标库",
				weight: 9,
			},
			{
				title: "爱给网",
				url: "https://www.aigei.com",
				desc: "拥有大量素材的一个网站",
				weight: 6,
			},
		],
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的在线小工具",
		weight: 80,
		items: [
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
				desc: "在线压缩 PNG / JPEG 图片",
				weight: 10,
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
				desc: "Google 出品的图片压缩与格式转换",
				weight: 9,
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
				desc: "把代码片段生成漂亮的图片",
				weight: 8,
			},
			{
				title: "Carbon",
				url: "https://excalidraw.com",
				desc: "简约的且功能强大的画布",
				weight: 8,
			},
		],
	},
	{
		id: "resources",
		name: "资源",
		icon: "material-symbols:auto-stories-outline-rounded",
		desc: "文档、教程与阅读",
		weight: 70,
		items: [
			{
				title: "celebrate-docs",
				url: "https://celebrate-docs.solyi.cn",
				desc: "celebrate 网站使用教程",
				icon: "https://celebrate.solyi.cc/fries.svg",
				weight: 10,
			},
		],
	},
];
