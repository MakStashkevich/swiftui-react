import { SetStateAction, useState } from 'react';
import { Binding, BooleanBinding } from '../utils/binding';

/**
 * Creates a `Binding` object, a two-way connection to a mutable state.
 * This is a React hook that mimics SwiftUI's `@Binding` property wrapper.
 * It's useful for components that need to modify the state of their parent.
 *
 * For boolean values, the hook also returns a `toggle` function.
 *
 * @param initialValue The initial value of the state.
 * @returns A `Binding` object with the current `value` and a `setValue` function.
 *          If the initial value is a boolean, it returns a `BooleanBinding`
 *          which includes a `toggle` function.
 *
 * @example
 * // Basic usage with a string
 * const ParentComponent = () => {
 *   const textBinding = useBinding("Hello");
 *   return <ChildComponent textBinding={textBinding} />;
 * };
 *
 * const ChildComponent = ({ textBinding }: { textBinding: Binding<string> }) => {
 *   return (
 *     <input
 *       type="text"
 *       value={textBinding.value}
 *       onChange={(e) => textBinding.setValue(e.target.value)}
 *     />
 *   );
 * };
 *
 * @example
 * // Usage with a boolean for a Toggle component
 * const ParentToggle = () => {
 *   const isOnBinding = useBinding(false);
 *   return <MyToggle isOnBinding={isOnBinding} />;
 * };
 *
 * const MyToggle = ({ isOnBinding }: { isOnBinding: BooleanBinding }) => {
 *   return (
 *     <button onClick={isOnBinding.toggle}>
 *       {isOnBinding.value ? "ON" : "OFF"}
 *     </button>
 *   );
 * };
 */
export function useBinding<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const toggle = () => setValue(!value as unknown as SetStateAction<T>);

  return {
    value,
    setValue,
    ...(typeof initialValue === 'boolean' && { toggle }),
  } as unknown as T extends boolean ? BooleanBinding : Binding<T>;
}
