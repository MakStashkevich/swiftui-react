import { cloneElement, ReactElement } from 'react';

export const ForEach = <T>(
  iterable: T[],
  renderFn: (element: T, index: number) => ReactElement<any>
) => {
  return iterable.map((element, index) => {
    const renderedElement = renderFn(element, index);
    return cloneElement(renderedElement, { id: index });
  });
};