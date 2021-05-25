/**
 * Copyright (c) 2020, Amdocs Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * All the exports in this file provide a fallback when components are rendered in
 * non-browser environments (i.e. server) and the window object is not defined.
 * This is only an issue when the code is accessing the window statically (like in
 * propTypes) or during the initial render. Any further runtime access to the window
 * object is OK since that code is only executed in the browser.
 */

export const fallback = (a, b) => (
    typeof window !== 'undefined' ? a : b
);

export const _window = fallback(window, {});

export const _document = fallback(document, {});

export const ResizeObserver = fallback(window.ResizeObserver, function ResizeObserver() {});

export const DOMRect = fallback(window.DOMRect, function DOMRect() {});

export const Element = fallback(window.Element, function Element() {});