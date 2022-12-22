
</br >
</br >

<p align='center'>
  <a target='_blank' rel='noopener noreferrer' href='#'>
    <img src='utils/images/logo.svg' alt='amaui logo' />
  </a>
</p>

<h1 align='center'>amaui Queue</h1>

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
  // yarn
  yarn add @amaui/queue

  // npm
  npm install @amaui/queue
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
  import AmauiQueue from '@amaui/queue';

  // Make a new queue instance
  const amauiQueue = new AmauiQueue();

  // Add values
  amauiQueue.push(1, 2, 3, 4);

  amauiQueue.first;
  // 1

  amauiQueue.length;
  // 4

  const value = amauiQueue.pop();

  value;
  // 1

  amauiQueue.first;
  // 2

  amauiQueue.length;
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

### Docs

Might be soon...
