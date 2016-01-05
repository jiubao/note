scope
=====

prototypal inheritance tree
---------------------------
**define**
* `__proto__`

**function**
* properties reference

operating tree
--------------
**define**
* $parent
* $prevSibling
* $nextSibling
* $childHead
* $childTail

**function**
* traversal tree
* digest
* event
  * emit
  * broadcast

digest
------
* digest only detect children, don't effect parents

event
-----
* isolate scope is in operating tree, events will be triggerred for emit/broadcast
