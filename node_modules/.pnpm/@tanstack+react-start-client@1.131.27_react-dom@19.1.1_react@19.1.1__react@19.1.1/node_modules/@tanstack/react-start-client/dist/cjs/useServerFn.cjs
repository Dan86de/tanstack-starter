"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const React = require("react");
const routerCore = require("@tanstack/router-core");
const reactRouter = require("@tanstack/react-router");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespaceDefault(React);
function useServerFn(serverFn) {
  const router = reactRouter.useRouter();
  return React__namespace.useCallback(
    async (...args) => {
      try {
        const res = await serverFn(...args);
        if (routerCore.isRedirect(res)) {
          throw res;
        }
        return res;
      } catch (err) {
        if (routerCore.isRedirect(err)) {
          err.options._fromLocation = router.state.location;
          return router.navigate(router.resolveRedirect(err).options);
        }
        throw err;
      }
    },
    [router, serverFn]
  );
}
exports.useServerFn = useServerFn;
//# sourceMappingURL=useServerFn.cjs.map
