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
        match: (i) => i === 0,
        styles,
      });
      return api;
    },

    nth(n: number, ...styles: SXArgs) {
      rules.push({
        match: (i) => i === n,
        styles,
      });
      return api;
    },

    even(...styles: SXArgs) {
      rules.push({
        match: (i) => i % 2 === 0,
        styles,
      });
      return api;
    },

    odd(...styles: SXArgs) {
      rules.push({
        match: (i) => i % 2 === 1,
        styles,
      });
      return api;
    },

    render() {
      return list.map((child, i) => {
        if (!React.isValidElement(child)) return child;

        const childProps = child.props ?? {};
        const len = list.length;

        const matchedStyles = rules
          .filter(rule => rule.match(i, len))
          .flatMap(rule => rule.styles);

        return React.cloneElement(child, {
          ...childProps,
          ...sx(...baseStyles, ...matchedStyles, childProps),
        });
      });
    },
  };

  return api;
}
