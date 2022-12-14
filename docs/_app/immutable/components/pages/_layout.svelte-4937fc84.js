import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, a as space, D as svg_element, q as text, l as claim_element, m as children, h as detach, c as claim_space, E as claim_svg_element, r as claim_text, F as src_url_equal, n as attr, G as base, H as toggle_class, b as insert_hydration, I as append_hydration, J as noop, K as component_subscribe, L as create_slot, v as create_component, w as claim_component, x as mount_component, M as update_slot_base, N as get_all_dirty_from_scope, O as get_slot_changes, f as transition_in, t as transition_out, y as destroy_component } from "../../chunks/paths-03251350.js";
import { p as page } from "../../chunks/stores-682d6f0f.js";
import "../../chunks/singletons-1148c08f.js";
const logo = "" + new URL("../../assets/svelte-logo-87df40b8.svg", import.meta.url).href;
const Header_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let header;
  let div0;
  let a0;
  let img;
  let img_src_value;
  let t0;
  let nav;
  let svg0;
  let path0;
  let t1;
  let ul;
  let li;
  let a1;
  let t2;
  let t3;
  let svg1;
  let path1;
  let t4;
  let div1;
  return {
    c() {
      header = element("header");
      div0 = element("div");
      a0 = element("a");
      img = element("img");
      t0 = space();
      nav = element("nav");
      svg0 = svg_element("svg");
      path0 = svg_element("path");
      t1 = space();
      ul = element("ul");
      li = element("li");
      a1 = element("a");
      t2 = text("Home");
      t3 = space();
      svg1 = svg_element("svg");
      path1 = svg_element("path");
      t4 = space();
      div1 = element("div");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      div0 = claim_element(header_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a0 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      img = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
      a0_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t0 = claim_space(header_nodes);
      nav = claim_element(header_nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      svg0 = claim_svg_element(nav_nodes, "svg", {
        viewBox: true,
        "aria-hidden": true,
        class: true
      });
      var svg0_nodes = children(svg0);
      path0 = claim_svg_element(svg0_nodes, "path", { d: true, class: true });
      children(path0).forEach(detach);
      svg0_nodes.forEach(detach);
      t1 = claim_space(nav_nodes);
      ul = claim_element(nav_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li = claim_element(ul_nodes, "LI", { class: true });
      var li_nodes = children(li);
      a1 = claim_element(li_nodes, "A", {
        "sveltekit:prefetch": true,
        href: true,
        class: true
      });
      var a1_nodes = children(a1);
      t2 = claim_text(a1_nodes, "Home");
      a1_nodes.forEach(detach);
      li_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      t3 = claim_space(nav_nodes);
      svg1 = claim_svg_element(nav_nodes, "svg", {
        viewBox: true,
        "aria-hidden": true,
        class: true
      });
      var svg1_nodes = children(svg1);
      path1 = claim_svg_element(svg1_nodes, "path", { d: true, class: true });
      children(path1).forEach(detach);
      svg1_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      t4 = claim_space(header_nodes);
      div1 = claim_element(header_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div1_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = logo))
        attr(img, "src", img_src_value);
      attr(img, "alt", "SvelteKit");
      attr(img, "class", "svelte-t2wq17");
      attr(a0, "href", "https://kit.svelte.dev");
      attr(a0, "class", "svelte-t2wq17");
      attr(div0, "class", "corner svelte-t2wq17");
      attr(path0, "d", "M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z");
      attr(path0, "class", "svelte-t2wq17");
      attr(svg0, "viewBox", "0 0 2 3");
      attr(svg0, "aria-hidden", "true");
      attr(svg0, "class", "svelte-t2wq17");
      attr(a1, "sveltekit:prefetch", "");
      attr(a1, "href", base + "/");
      attr(a1, "class", "svelte-t2wq17");
      attr(li, "class", "svelte-t2wq17");
      toggle_class(li, "active", ctx[0].url.pathname === "/");
      attr(ul, "class", "svelte-t2wq17");
      attr(path1, "d", "M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z");
      attr(path1, "class", "svelte-t2wq17");
      attr(svg1, "viewBox", "0 0 2 3");
      attr(svg1, "aria-hidden", "true");
      attr(svg1, "class", "svelte-t2wq17");
      attr(nav, "class", "svelte-t2wq17");
      attr(div1, "class", "corner svelte-t2wq17");
      attr(header, "class", "svelte-t2wq17");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, div0);
      append_hydration(div0, a0);
      append_hydration(a0, img);
      append_hydration(header, t0);
      append_hydration(header, nav);
      append_hydration(nav, svg0);
      append_hydration(svg0, path0);
      append_hydration(nav, t1);
      append_hydration(nav, ul);
      append_hydration(ul, li);
      append_hydration(li, a1);
      append_hydration(a1, t2);
      append_hydration(nav, t3);
      append_hydration(nav, svg1);
      append_hydration(svg1, path1);
      append_hydration(header, t4);
      append_hydration(header, div1);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1) {
        toggle_class(li, "active", ctx2[0].url.pathname === "/");
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(header);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
class Header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let header;
  let t0;
  let main;
  let t1;
  let footer;
  let p;
  let t2;
  let a;
  let t3;
  let t4;
  let current;
  header = new Header({});
  const default_slot_template = ctx[2].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[1], null);
  return {
    c() {
      create_component(header.$$.fragment);
      t0 = space();
      main = element("main");
      if (default_slot)
        default_slot.c();
      t1 = space();
      footer = element("footer");
      p = element("p");
      t2 = text("visit ");
      a = element("a");
      t3 = text("kit.svelte.dev");
      t4 = text(" to learn SvelteKit");
      this.h();
    },
    l(nodes) {
      claim_component(header.$$.fragment, nodes);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      if (default_slot)
        default_slot.l(main_nodes);
      main_nodes.forEach(detach);
      t1 = claim_space(nodes);
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      p = claim_element(footer_nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "visit ");
      a = claim_element(p_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "kit.svelte.dev");
      a_nodes.forEach(detach);
      t4 = claim_text(p_nodes, " to learn SvelteKit");
      p_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(main, "class", "svelte-1izrdc8");
      attr(a, "href", "https://kit.svelte.dev");
      attr(a, "class", "svelte-1izrdc8");
      attr(footer, "class", "svelte-1izrdc8");
    },
    m(target, anchor) {
      mount_component(header, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      if (default_slot) {
        default_slot.m(main, null);
      }
      insert_hydration(target, t1, anchor);
      insert_hydration(target, footer, anchor);
      append_hydration(footer, p);
      append_hydration(p, t2);
      append_hydration(p, a);
      append_hydration(a, t3);
      append_hydration(p, t4);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[1],
            !current ? get_all_dirty_from_scope(ctx2[1]) : get_slot_changes(default_slot_template, ctx2[1], dirty, null),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(header.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(header.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(header, detaching);
      if (detaching)
        detach(t0);
      if (detaching)
        detach(main);
      if (default_slot)
        default_slot.d(detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(footer);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const prerender = true;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [prerender, $$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { prerender: 0 });
  }
  get prerender() {
    return this.$$.ctx[0];
  }
}
export {
  Layout as default
};
//# sourceMappingURL=_layout.svelte-4937fc84.js.map
