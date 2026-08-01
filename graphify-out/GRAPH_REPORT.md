# Graph Report - .  (2026-08-01)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 138 nodes · 166 edges · 14 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4f06a1d6`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `agentInfo` - 9 edges
3. `useInView()` - 7 edges
4. `scripts` - 5 edges
5. `include` - 5 edges
6. `lib` - 4 edges
7. `download()` - 3 edges
8. `download_cli()` - 3 edges
9. `categories` - 3 edges
10. `About()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `About()` --calls--> `useInView()`  [EXTRACTED]
  src/components/sections/About.tsx → src/hooks/useInView.ts
- `Testimonials()` --calls--> `useInView()`  [EXTRACTED]
  src/components/sections/Testimonials.tsx → src/hooks/useInView.ts
- `VideoShowcase()` --calls--> `useInView()`  [EXTRACTED]
  src/components/sections/VideoShowcase.tsx → src/hooks/useInView.ts

## Import Cycles
- None detected.

## Communities (14 total, 4 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (13): Footer(), Navbar(), WhatsAppButton(), About(), Contact(), Hero(), Testimonials(), VideoShowcase() (+5 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (19): eslint, eslint-config-next, @eslint/eslintrc, devDependencies, eslint, eslint-config-next, @eslint/eslintrc, tailwindcss (+11 more)

### Community 2 - "Community 2"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 3 - "Community 3"
Cohesion: 0.13
Nodes (14): background_color, categories, description, dir, display, icons, lang, name (+6 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (13): clsx, lucide-react, next, dependencies, clsx, lucide-react, next, react (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 6 - "Community 6"
Cohesion: 0.39
Nodes (6): download(), download_cli(), download_file(), get_latest_version(), handle_rate_limit(), cli.sh script

### Community 7 - "Community 7"
Cohesion: 0.25
Nodes (7): next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude, include

### Community 8 - "Community 8"
Cohesion: 0.40
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): Properties(), properties, Property

## Knowledge Gaps
- **70 isolated node(s):** `__filename`, `__dirname`, `compat`, `eslintConfig`, `nextConfig` (+65 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 1` to `Community 5`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 4` to `Community 5`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 2` to `Community 7`?**
  _High betweenness centrality (0.031) - this node is a cross-community bridge._
- **What connects `__filename`, `__dirname`, `compat` to the rest of the system?**
  _70 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._