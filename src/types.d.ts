declare module '*.pug' {
	import { LocalsObject } from 'pug'
	const content: (locals?: LocalsObject) => string;
	export default content;
}