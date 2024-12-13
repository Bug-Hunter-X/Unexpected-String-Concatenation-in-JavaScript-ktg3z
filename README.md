# Unexpected String Concatenation in JavaScript

This example demonstrates a common error in JavaScript due to its dynamic typing.  When adding a number and a string, JavaScript performs string concatenation rather than numeric addition.

## Bug

The `foo` function intends to add two numbers. However, because one of the arguments is a string, the `+` operator performs string concatenation.

## Solution

The solution involves explicit type conversion using `parseInt()` or `Number()` to ensure both operands are numbers before performing the addition.