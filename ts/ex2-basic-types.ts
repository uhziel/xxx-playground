// https://wangdoc.com/javascript/types/index.html
// https://www.typescriptlang.org/docs/handbook/basic-types.html

// primitive type: boolean
let isDone: boolean = false;

// primitive type: number
let n: number = 10;

// primitive type: string
let s: string = 'foo';

// array
let ar1: number[] = [1, 3, 5];
let ar2: Array<number> = [2, 4, 6];

// tuple
let t: [string, number] = ['foo', 11];

// enum
enum Color {
  Red,
  Green,
  Blue,
};

let c: Color = Color.Red;

// unknown
let u: unknown = 4;
u = 'foo';
let s1: string = u; // unknown 类型是没法赋值给 string 的，可以通过条件判断先让 unknown 确定好类型

// any
let a : any = 4;
a = 'foo';
let s2: string = a;

// void，其他的还有 null(primitive type)、undefined(primitive type)、never
function foobar(): void {}

// Object。看着在js、ts环境中，首字母大小的标识符都是表示类。比如，string 与 String。
function foobar2(a: Object | null) {}
