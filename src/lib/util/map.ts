// export const remap (v:number,min:number,max:number)
export const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

export const cos = (x: number) => Math.cos(Math.PI * 2 * x);
export const sin = (x: number) => Math.sin(Math.PI * 2 * x);

export const isEven = (x: number) => x % 2 == 0;
