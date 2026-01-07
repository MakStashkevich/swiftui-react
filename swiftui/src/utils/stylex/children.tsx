import React from "react";
import { sx } from ".";

type SXArgs = Parameters<typeof sx>;

export function sxChild(children: React.ReactNode, ...baseStyles: SXArgs) {
  const list = React.Children.toArray(children);

  const rules: Array<{
    match: (i: number, len: number) => boolean;
    styles: SXArgs;
  }> = [];

  const api = {
    last(...styles: SXArgs) {
      rules.push({
        match: (i, len) => i === len - 1,
        styles,
      });
      return api;
    },

    first(...styles: SXArgs) {
      rules.push({
        match: i => i === 0,
        styles,
      });
      return api;
    },

    nth(n: number, ...styles: SXArgs) {
      rules.push({
        match: i => i === n,
        styles,
      });
      return api;
    },

    even(...styles: SXArgs) {
      rules.push({
        match: i => i % 2 === 0,
        styles,
      });
      return api;
    },

    odd(...styles: SXArgs) {
      rules.push({
        match: i => i % 2 === 1,
        styles,
      });
      return api;
    },

    not(
      predicate: (i: number, len: number) => boolean,
      ...styles: SXArgs
    ) {
      rules.push({
        match: (i, len) => !predicate(i, len),
        styles,
      });
      return api;
    },

    render(
      wrapper?: (child: React.ReactNode, index: number, size: number) => React.ReactElement
    ) {
      return list.map((child, i) => {
        const len = list.length;

        if (!React.isValidElement(child)) {
          if (!wrapper) {
            return <React.Fragment key={i}>{child}</React.Fragment>;
          }
          const wrapped = wrapper(child, i, len);
          return React.cloneElement(wrapped, { key: i });
        }

        const childProps = child.props ?? {};

        const matchedStyles = rules
          .filter(rule => rule.match(i, len))
          .flatMap(rule => rule.styles);

        const styledChild = React.cloneElement(child, {
          ...childProps,
          ...sx(childProps, ...baseStyles, ...matchedStyles),
        });

        if (wrapper) {
          const wrapped = wrapper(styledChild, i, len);
          return React.cloneElement(wrapped, { key: i });
        }

        return React.cloneElement(styledChild, { key: i });
      });
    },
  };

  return api;
}
