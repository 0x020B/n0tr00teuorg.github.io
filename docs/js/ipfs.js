const node = await Ipfs.create();
const stream = node.cat('QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A')
const decoder = new TextDecoder()
let data = ''

for await (const chunk of stream) {
	data += decoder.decode(chunk, { stream: true })
}
console.log(data)
