const Deque = require('./Deque');

describe('Deque', () => {
  it('should create without errors', () => {
    const deque = new Deque(5);
    expect(deque).toBeDefined();
  });

  it('should add elements at back', () => {
    const deque = new Deque(3);
    deque.push_back(1);
    deque.push_back(2);
    deque.push_back(3);

    expect(deque.pop_front()).toBe(1);
    expect(deque.pop_front()).toBe(2);
    expect(deque.pop_front()).toBe(3);
  });

  it('should add elements at front', () => {
    const deque = new Deque(3);
    deque.push_front(1);
    deque.push_front(2);
    deque.push_front(3);

    expect(deque.pop_back()).toBe(1);
    expect(deque.pop_back()).toBe(2);
    expect(deque.pop_back()).toBe(3);
  });

  it('should add elements at front and return from front', () => {
    const deque = new Deque(3);
    deque.push_front(1);
    deque.push_front(2);
    deque.push_front(3);

    expect(deque.pop_front()).toBe(3);
    expect(deque.pop_front()).toBe(2);
    expect(deque.pop_front()).toBe(1);
  });

  it('should add elements at back and return from back', () => {
    const deque = new Deque(3);
    deque.push_back(1);
    deque.push_back(2);
    deque.push_back(3);

    expect(deque.pop_back()).toBe(3);
    expect(deque.pop_back()).toBe(2);
    expect(deque.pop_back()).toBe(1);
  });

  it('push_back should return error if size riches the maxSize of elements', () => {
    const deque = new Deque(2);

    deque.push_back(1);
    deque.push_back(2);
    expect(deque.push_back(3)).toBe('error');
    expect(deque.pop_back()).toBe(2);
    expect(deque.pop_front()).toBe(1);
  });

  it('push_front should return error if size riches the maxSize of elements', () => {
    const deque = new Deque(2);

    deque.push_front(1);
    deque.push_front(2);

    expect(deque.push_front(3)).toBe('error');
    expect(deque.pop_front()).toBe(2);
    expect(deque.pop_front()).toBe(1);
  });

  it('pop_back should return error if there is no elements in the deque', () => {
    const deque = new Deque(1);

    expect(deque.pop_back()).toBe('error');
  });

  it('pop_front should return error if there is no elements in the deque', () => {
    const deque = new Deque(1);
    expect(deque.pop_front()).toBe('error');
  });

  it('should add and remove elements correctly', () => {
    const deque = new Deque(3);

    deque.push_front(1);
    deque.push_back(2);
    deque.push_front(3);
    // 3,1,2

    expect(deque.pop_front()).toBe(3);
    expect(deque.pop_back()).toBe(2);
    // 1

    deque.push_front(4);
    deque.push_front(5);
    // 5,4,1

    expect(deque.pop_back()).toBe(1);
    expect(deque.pop_back()).toBe(4);
    expect(deque.pop_back()).toBe(5);
  });

  it('should work', () => {
    const deque = new Deque(4);

    deque.push_back(-977);
    expect(deque.pop_back()).toBe(-977);
    expect(deque.pop_back()).toBe('error');
    deque.push_front(-86);
    expect(deque.pop_back()).toBe(-86);
    deque.push_back(81);
    expect(deque.pop_front()).toBe(81);
    expect(deque.pop_back()).toBe('error');
    expect(deque.pop_back()).toBe('error');
  });

  it('should work if elements added from both ends', () => {
    const deque = new Deque(4);

    deque.push_back(1);
    deque.push_front(2);
    deque.push_back(3);
    deque.push_front(4);
    // 4213

    expect(deque.pop_back()).toBe(3);
    expect(deque.pop_front()).toBe(4);
    expect(deque.pop_back()).toBe(1);
    expect(deque.pop_front()).toBe(2);
  });
});
