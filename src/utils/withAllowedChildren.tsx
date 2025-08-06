export const withAllowedChildren = (Component, allowed) => {
  Component.craft = {
    ...(Component.craft || {}),
    displayName: Component.displayName || Component.name,
    rules: {
      canMoveIn: (incoming) =>
        incoming.every((node) => allowed.includes(node.data.displayName)),
    },
  };
  return Component;
};