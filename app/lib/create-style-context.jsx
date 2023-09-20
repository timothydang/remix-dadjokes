import { createContext, forwardRef, useContext } from "react";

export const createStyleContext = (recipe) => {
  const StyleContext = createContext(null);

  const withProvider = (Component, part) => {
    const Comp = forwardRef((props, ref) => {
      const [variantProps, rest] = recipe.splitVariantProps(props);
      const styles = recipe(variantProps);
      return (
        <StyleContext.Provider value={styles}>
          <Component ref={ref} className={styles?.[part ?? ""]} {...rest} />
        </StyleContext.Provider>
      );
    });
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  const withContext = (Component, part) => {
    if (!part) return Component;

    const Comp = forwardRef((props, ref) => {
      const styles = useContext(StyleContext);
      return (
        <Component ref={ref} className={styles?.[part ?? ""]} {...props} />
      );
    });
    Comp.displayName = Component.displayName || Component.name;
    return Comp;
  };

  return {
    withProvider,
    withContext,
  };
};
