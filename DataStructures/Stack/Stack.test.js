const Stack = require('./Stack');

describe('Stack', () => {
  it('should create without errors', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  it('should add elements at back', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
  });

  it('should return error if stack is empty', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe('error');
    stack.push(5);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe('error');
  });
});
