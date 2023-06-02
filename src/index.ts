import 'isomorphic-fetch';

const run = (valName: string, ...args: any) =>
  fetch(`https://api.val.town/v1/run/${valName.replace('@', '')}?args=${JSON.stringify(args)}`).then((r) => r.json());

export default {
  run,
};

(async () => {
  const res = await run('@joey.helloWorld', { a: 'some arg' });
  console.log(res);
})();
