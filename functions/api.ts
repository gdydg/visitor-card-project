// functions/api.ts

// 定义响应的数据结构
interface Env {
    // 如果您使用了 KV 或 D1，在这里定义
}

// Cloudflare Pages 的函数处理方式
export const onRequest: PagesFunction<Env> = async (context) => {
    const { request } = context;

    // 从 Cloudflare 添加到请求对象中的 `cf` 属性获取地理位置等信息
    const city = request.cf?.city ?? '未知';
    const country = request.cf?.country ?? '未知';
    const continent = request.cf?.continent ?? '未知';
    const region = request.cf?.region ?? '未知';
    const timezone = request.cf?.timezone ?? '未知';

    // 从请求头中获取 IP 地址
    const ip = request.headers.get('CF-Connecting-IP') ?? '未知';

    // 从请求头获取 User-Agent，用于分析操作系统和浏览器
    const ua = request.headers.get('User-Agent') ?? '';

    // 简单的 User-Agent 解析逻辑
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

    // 构造返回的数据对象
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
    };

    // 返回 JSON 格式的响应
    return new Response(JSON.stringify(data, null, 2), {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    });
};
