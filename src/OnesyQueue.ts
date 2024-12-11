import { is } from '@onesy/utils';

export type TOnesyQueueValue = Array<any>;

export default class OnesyQueue {
  public value: TOnesyQueueValue = [];
  public limit = 1e9;

  public constructor(
    value: TOnesyQueueValue,
    limit: number
  ) {
    if (is('array', value)) this.value = value;

    if (is('number', limit)) this.limit = limit;
  }

  get length() { return this.value.length; }

  get first() { return this.value[this.length - 1]; }

  get peak() { return this.first; }

  get empty() { return this.length === 0; }

  get full() { return this.length === this.limit; }

  public push(...values: TOnesyQueueValue): boolean {
    for (const value of values) {
      if (this.length >= this.limit) return false;

      this.value.unshift(value);
    }

    return true;
  }

  public pop(): any {
    return this.value.pop();
  }

  public clear(): OnesyQueue {
    this.value = [];

    return this;
  }
}
