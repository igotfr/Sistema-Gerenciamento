const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/products/index.svelte"),
	() => import("../../../src/routes/products/add.svelte"),
	() => import("../../../src/routes/products/[id].svelte"),
	() => import("../../../src/routes/agent/report.svelte"),
	() => import("../../../src/routes/agent/edit.svelte"),
	() => import("../../../src/routes/agent/[agentId].svelte"),
	() => import("../../../src/routes/teste/[id].svelte"),
	() => import("../../../src/routes/lead/index.svelte"),
	() => import("../../../src/routes/lead/report.svelte"),
	() => import("../../../src/routes/lead/add.svelte"),
	() => import("../../../src/routes/lead/[id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/products/index.svelte
	[/^\/products\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/products/add.svelte
	[/^\/products\/add\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/products/[id].svelte
	[/^\/products\/([^/]+?)\/?$/, [c[0], c[5]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/agent/report.svelte
	[/^\/agent\/report\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/agent/edit.svelte
	[/^\/agent\/edit\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/agent/[agentId].svelte
	[/^\/agent\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ agentId: d(m[1])})],

	// src/routes/teste/[id].svelte
	[/^\/teste\/([^/]+?)\/?$/, [c[0], c[9]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/lead/index.svelte
	[/^\/lead\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/lead/report.svelte
	[/^\/lead\/report\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/lead/add.svelte
	[/^\/lead\/add\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/lead/[id].svelte
	[/^\/lead\/([^/]+?)\/?$/, [c[0], c[13]], [c[1]], (m) => ({ id: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];