// functions/api.ts

// 定义响应的数据结构
interface Env {
    // 如果您使用了 KV 或 D1，在这里定义
}

/**
 * 使用 Haversine 公式计算两个地理坐标之间的距离
 * @param lat1 点1的纬度
 * @param lon1 点1的经度
 * @param lat2 点2的纬度
 * @param lon2 点2的经度
 * @returns 两点之间的距离（公里）
 */
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // 地球半径（公里）
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // 距离（公里）
    return Math.round(distance); // 返回四舍五入的整数
}

// Cloudflare Pages 的函数处理方式
export const onRequest: PagesFunction<Env> = async (context) => {
    const { request } = context;

    // --- 目标地点坐标 (默认为北京天安门) ---
    // 您可以修改为任何您想要的地点
    const targetLocation = {
        name: "北京",
        latitude: 39.9042,
        longitude: 116.4074
    };

    // --- 从请求中获取访客信息 ---
    const city = request.cf?.city ?? '未知';
    const country = request.cf?.country ?? '未知';
    const continent = request.cf?.continent ?? '未知';
    const region = request.cf?.region ?? '未知';
    const timezone = request.cf?.timezone ?? '未知';
    const ip = request.headers.get('CF-Connecting-IP') ?? '未知';
    const ua = request.headers.get('User-Agent') ?? '';

    // --- 新增：获取访客经纬度 ---
    const visitorLat = request.cf?.latitude ? parseFloat(request.cf.latitude) : null;
    const visitorLon = request.cf?.longitude ? parseFloat(request.cf.longitude) : null;

    // --- 新增：计算距离 ---
    let distance = null;
    if (visitorLat && visitorLon) {
        distance = getDistance(visitorLat, visitorLon, targetLocation.latitude, targetLocation.longitude);
    }

    // --- 解析操作系统和浏览器 ---
    let os = '未知';
    if (/Windows/.test(ua)) os = 'Windows';
    else if (/Mac OS/.test(ua)) os = 'macOS';
    else if (/Linux/.test(ua)) os = 'Linux';
    else if (/Android/.test(ua)) os = 'Android';
    else if (/iPhone|iPad/.test(ua)) os = 'iOS';

    let browser = '未知';
    if (/Edg/.test(ua)) browser = 'Edge';
    else if (/Chrome/.test(ua)) browser = 'Chrome';
    else if (/Firefox/.test(ua)) browser = 'Firefox';
    else if (/Safari/.test(ua) && !/Chrome/.test(ua)) browser = 'Safari';

    // --- 构造返回的数据对象 (新增了 distance 字段) ---
    const data = {
        ip: ip,
        address: `${country}, ${region}, ${city}`,
        country: country,
        city: city,
        continent: continent,
        timezone: timezone,
        os: os,
        browser: browser,
        isp: request.cf?.asOrganization ?? '未知',
        distance: distance !== null ? `约 ${distance} 公里` : '未知', // 添加距离字段
        targetLocationName: targetLocation.name, // 添加目标城市名字段
    };

    // 返回 JSON 格式的响应
    return new Response(JSON.stringify(data, null, 2), {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};
