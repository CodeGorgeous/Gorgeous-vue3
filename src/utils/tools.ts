import { twoWayDataSymbol } from "@/config/system";

export function twoWayProjection(map: Map<any, any>) {
    // 表明这个数据现在就是个双向映射数据
    if (map.get(twoWayDataSymbol)) return map;
    map.forEach((value, key) => map.set(value, key));
    map.set(twoWayDataSymbol, true);
    return map;
}

// 生成一个6为的hash值字符串
export function generateHash() {
    return Math.random().toString(16).slice(2, 8);
};