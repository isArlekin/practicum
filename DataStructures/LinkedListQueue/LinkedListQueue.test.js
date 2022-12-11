const LinkedListQueue = require('./LinkedListQueue');

describe('LinkedListQueue', () => {
  it('should create without errors', () => {
    const queue = new LinkedListQueue();
    expect(queue).toBeDefined();
  });

  it('should return null if call get method on an empty queue', () => {
    const queue = new LinkedListQueue();
    expect(queue.get()).toBe(null);

    queue.put(-34);
    queue.put(-23);

    expect(queue.get()).toBe(-34);
    expect(queue.size()).toBe(1);
    expect(queue.get()).toBe(-23);
    expect(queue.size()).toBe(0);
    expect(queue.get()).toBe(null);
    expect(queue.get()).toBe(null);

    queue.put(80);
    expect(queue.size()).toBe(1);
  });

  it('should add elements in queue', () => {
    const queue = new LinkedListQueue();

    queue.put(-66);
    queue.put(98);

    expect(queue.size()).toBe(2);
    expect(queue.size()).toBe(2);
    expect(queue.get()).toBe(-66);
    expect(queue.get()).toBe(98);
  });

  it('should return current size of queue', () => {
    const queue = new LinkedListQueue();

    expect(queue.size()).toBe(0);

    queue.put(1);
    queue.put(2);
    expect(queue.size()).toBe(2);
    queue.get();
    expect(queue.size()).toBe(1);
    queue.get();
    expect(queue.size()).toBe(0);
  });
});
