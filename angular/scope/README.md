scope - angular
===============

two trees
---------


### prototypal inheritance tree
* __proto__

properties reference

### operating tree
* $parent
* $prevSibling
* $nextSibling
* $childHead
* $childTail

traversal tree

* digest
* event
  * emit
  * broadcast

digest
------
* digest only detect children, don't effect parents

event
-----
isolate scope is in operating tree, events will be triggerred for emit/broadcast
