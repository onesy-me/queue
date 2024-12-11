
</br>
</br>

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='onesy logo' />
  </a>
</p>

<h1 align='center'>onesy Queue</h1>

<p align='center'>
  Queue
</p>

<br />

<h3 align='center'>
  <sub>MIT license&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Production ready&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>UMD 1.5kb gzipped&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>100% test cov&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Browser and Nodejs</sub>
</h3>

<p align='center'>
  <sub>Very simple code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Modern code&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Junior friendly&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Typescript&nbsp;&nbsp;&nbsp;&nbsp;</sub>
  <sub>Made with :yellow_heart:</sub>
</p>

<br />

## Getting started

### Add

```sh
yarn add @onesy/queue
```

### Use cases
- First come, first serve, use cases
- CPU Scheduling
- Memory management
- Website requests handling on the server
- Routers and switches in networking
- etc.

### Use

```javascript
  import OnesyQueue from '@onesy/queue';

  // Make a new queue instance
  const onesyQueue = new OnesyQueue();

  // Add values
  onesyQueue.push(1, 2, 3, 4);

  onesyQueue.first;
  // 1

  onesyQueue.length;
  // 4

  const value = onesyQueue.pop();

  value;
  // 1

  onesyQueue.first;
  // 2

  onesyQueue.length;
  // 3
```

### Dev

Install

```sh
yarn
```

Test

```sh
yarn test
```

### Prod

Build

```sh
yarn build
```
