const request = async (url, method = 'GET', body = null) => {
    // 从 localStorage 中获取 token
    // 用户登录后，服务器生成一个 Token，用户之后的请求只需携带这个 Token，无需重复输入账号密码
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
    };

    // 如果存在 token，添加到请求头
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  
    const options = {
      method,
      headers,
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
        // fetch 是浏览器内置的 API，用于发送 HTTP 请求并获取数据。
        // 返回的是 Promise，可以配合 async/await 进行异步操作。
        // fetch的基本用法：
        //    fetch('xxx', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             title: 'Hello',
        //             data: '这是一个POST请求示例',
        //             userId: 1,
        //         })
        //     }).then(response => response.json())   // 解析 JSON 响应
        //       .then(data => console.log('成功:', data))   // 处理数据
        //       .catch(error => console.error('请求失败:', error));
         
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Error during fetch:', error);
        throw error;
      }
}

// 使用示例
const getData = async (url) => {
    //   const url = 'https://api.example.com/data';
    try {
        const data = await request(url, 'GET');
        console.log('Data fetched:', data);
        return data;
    } catch (error) {
        console.error('Fetch failed:', error);
    }
};

export default getData;