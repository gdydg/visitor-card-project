---
// src/components/VisitorInfo.astro
// 这是一个新的组件，用于显示访客信息
---

<section class="vh-aside-item">

    <!-- 标题，样式参考了主题中的“公告”块 -->
    <span class="visitor-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        欢迎来访!
    </span>
    <!-- 新增的欢迎信息块 -->
    <div class="welcome-message">
        <p>👋 我是𝙄𝙆𝙐𝙉，一个技术爱好者，喜欢分享经验。😊</p>
        <p>❓ 有问题欢迎提问，确保内容有意义，详情请见<a href="/message/" target="_message" rel="noopener noreferrer">提问的智慧</a>。如需联系我，欢迎通过<a href="mailto:admin@204090.xyz">邮箱联系我</a>！📧</p>
    </div>

    <!-- 信息内容 -->
    <div class="visitor-content">
        <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M10.5 14h3a5.5 5.5 0 0 1 5.5 5.5v1h-14v-1A5.5 5.5 0 0 1 10.5 14M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></path></svg>
            <span>IP 地址:</span>
            <span id="ip-address">正在加载...</span>
        </div>
        <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
            <span>地理位置:</span>
            <span id="location">正在加载...</span>
        </div>
        <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><path d="M10.4 16.38L15 10l-2.42-2.42"/></svg>
            <span>与博主距离:</span>
            <span id="distance">正在计算...</span>
        </div>
        <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
            <span>运 营 商:</span>
            <span id="isp">正在加载...</span>
        </div>
        <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6v12h20V6zm18 10H4V8h16z"></path></svg>
            <span>操作系统:</span>
            <span id="os">正在加载...</span>
        </div>
        <div class="info-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-4-8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4Z"></path></svg>
            <span>浏 览 器:</span>
            <span id="browser">正在加载...</span>
        </div>
    </div>

</section>

<style>
    .vh-aside-item .welcome-message {
        padding-bottom: 0.75rem;
        margin-bottom: 0.75rem;
        border-bottom: 1px solid var(--border-color, #e5e7eb);
        font-size: 0.875rem;
        color: var(--text-color, #374151);
    }
    .vh-aside-item .welcome-message p {
        margin: 0.5rem 0;
        line-height: 1.6;
    }
    .vh-aside-item .welcome-message a {
        color: var(--theme-color, #3eaf7c);
        text-decoration: none;
        font-weight: 600;
    }
    .vh-aside-item .welcome-message a:hover {
        text-decoration: underline;
    }
    .vh-aside-item .visitor-title {
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--border-color, #e5e7eb);
    }
    .vh-aside-item .visitor-title svg {
        margin-right: 0.5rem;
    }
    .vh-aside-item .visitor-content {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    .vh-aside-item .info-item {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        color: var(--text-color-light, #6b7280);
    }
    .vh-aside-item .info-item svg {
        margin-right: 0.75rem;
        flex-shrink: 0;
    }
    .vh-aside-item .info-item span:nth-of-type(1) {
        min-width: 60px;
        color: var(--text-color, #374151);
    }
</style>

<script is:inline>
    // 移除 DOMContentLoaded，让脚本在 Astro 环境下正确执行
    const BLOGGER_LAT = 23.0575; // 你的纬度
    const BLOGGER_LON = 112.4536; // 你的经度

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371;
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = 0.5 - Math.cos(dLat) / 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * (1 - Math.cos(dLon)) / 2;
        return Math.round(R * 2 * Math.asin(Math.sqrt(a)));
    };

    const getOS = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Win')) return 'Windows';
      if (ua.includes('Mac')) return 'MacOS';
      if (ua.includes('Linux')) return 'Linux';
      if (ua.includes('Android')) return 'Android';
      if (ua.includes('like Mac')) return 'iOS';
      return 'Unknown';
    };

    const getBrowser = () => {
      const ua = navigator.userAgent;
      if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
      if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
      if (ua.includes('Firefox')) return 'Firefox';
      if (ua.includes('Edg')) return 'Edge';
      return 'Unknown';
    };

    const setInfo = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };
    
    const setAllToFailure = () => {
        setInfo('ip-address', '获取失败');
        setInfo('location', '获取失败');
        setInfo('isp', '获取失败');
        setInfo('distance', '获取失败');
    };

    const fetchIpInfo = async () => {
        setInfo('os', getOS());
        setInfo('browser', getBrowser());

        try {
            // 首先尝试 ip.sb
            const response = await fetch('https://api.ip.sb/geoip');
            if (!response.ok) throw new Error('Network response was not ok for ip.sb');
            const data = await response.json();

            setInfo('ip-address', data.ip || 'N/A');
            setInfo('location', `${data.country || ''}, ${data.city || ''}`);
            setInfo('isp', data.organization || 'N/A');
            
            if (data.latitude && data.longitude) {
                const dist = calculateDistance(BLOGGER_LAT, BLOGGER_LON, data.latitude, data.longitude);
                setInfo('distance', `约 ${dist} 公里`);
            } else {
                setInfo('distance', '无法计算');
            }
        } catch (error1) {
            console.error('Error fetching from ip.sb, trying fallback:', error1);
            // 如果 ip.sb 失败，尝试 ip-api.com
            try {
                const response = await fetch('https://ip-api.com/json');
                if (!response.ok) throw new Error('Network response was not ok for ip-api.com');
                const data = await response.json();

                if (data.status !== 'success') throw new Error('API status was not success');

                setInfo('ip-address', data.query || 'N/A');
                setInfo('location', `${data.country || ''}, ${data.city || ''}`);
                setInfo('isp', data.isp || 'N/A');

                if (data.lat && data.lon) {
                    const dist = calculateDistance(BLOGGER_LAT, BLOGGER_LON, data.lat, data.lon);
                    setInfo('distance', `约 ${dist} 公里`);
                } else {
                    setInfo('distance', '无法计算');
                }
            } catch (error2) {
                console.error('Error fetching from fallback ip-api.com:', error2);
                setAllToFailure();
            }
        }
    };

    // 直接调用函数，而不是包裹在事件监听器中
    fetchIpInfo();
</script>
