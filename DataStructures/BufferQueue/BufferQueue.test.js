const BufferQueue = require('./BufferQueue');

describe('BuggerQueue', () => {
  it('should create queue without errors', () => {
    const queue = new BufferQueue(10);
    expect(queue).toBeDefined();
  });

  it('should allow to add elements in queue', () => {
    const queue = new BufferQueue(3);

    queue.push(1);
    queue.push(3);
    queue.push(2);

    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(2);
  });

  it('should not allow to add more then max size of elements', () => {
    const queue = new BufferQueue(3);

    queue.push(3);
    queue.push(2);
    queue.push(1);
    queue.push(0);

    expect(queue.pop()).toBe(3);
    expect(queue.pop()).toBe(2);
    expect(queue.pop()).toBe(1);
  });

  it('should allow to add elements at the beginning of queue', () => {
    const queue = new BufferQueue(3);

    queue.push(3);
    queue.push(2);
    queue.push(1);

    queue.pop();
    queue.pop();

    queue.push(5);
    queue.push(6);

    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(5);
    expect(queue.pop()).toBe(6);
  });

  it('should return number of elements in queue', () => {
    const queue = new BufferQueue(3);

    expect(queue.size()).toBe(0);

    queue.push(3);
    queue.push(2);

    queue.pop();

    expect(queue.size()).toBe(1);
  });

  it('should return null if pop method is called when the queue is empty', () => {
    const queue = new BufferQueue(3);
    expect(queue.pop()).toBe(null);
  });

  it('should return element at the top of the queue not removing it', () => {
    const queue = new BufferQueue(3);

    expect(queue.peek()).toBe(null);

    queue.push(3);
    queue.push(2);

    expect(queue.peek()).toBe(3);
    queue.pop();
    expect(queue.peek()).toBe(2);
  });
});
